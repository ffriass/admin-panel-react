import React, { useState, useEffect } from "react";
import "../../components/datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { statusClassMapping, userColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { getUsers } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const Employee = () => {
  const [pageSize] = useState(10);
  const [response, callback, isloading] = useFetch(
    getUsers("employees", 0, pageSize)
  );
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };

  const handlePageChange = (newPage) => {
    callback(getUsers("employees", newPage, pageSize), (result) => {
      setData(result.data);
    });
  };

  const actionColumn = [
    {
      field: "statusName",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${ statusClassMapping(params.row.isActive ? params.row.statusName : "Inactive")}`} >
            { params.row.isActive && params.row.statusName == "Unknown" ? "Pending" : !params.row.isActive ? "Inactive": params.row.statusName }
          </div>
        );
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} className="link">
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/users/${params.row.id}/edit`} className="link">
              <div className="neutralButton">Edit</div>
            </Link>
            <div
              className="inactiveButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    setData(response?.payload?.data);
    setRowCountState((prevRowCountState) =>
      response?.payload?.rowCount !== undefined
        ? response?.payload?.rowCount
        : prevRowCountState
    );
  }, [response?.payload?.rowCount, setRowCountState]);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>Employees</div>
        <Link to="/users/new" className="link">
          <AddIcon />
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data || []}
        columns={userColumns.concat(actionColumn)}
        pageSize={pageSize}
        rowCount={rowCountState}
        loading={isloading}
        autoHeight
        paginationMode="server"
        onPageChange={handlePageChange}
        // checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Employee;
