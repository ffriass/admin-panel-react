import React, { useState, useEffect } from "react";
import "../../components/datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { statusClassMapping, userColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const Customer = (props) => {
  const [pageSize] = useState(10);
  const [response, callback, isloading] = useFetch(getUsers("customers", 0, pageSize))
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(response?.payload?.rowCount || 0 );


  const handleActivation = (email, status) => {
    //setData(data.filter((item) => item.id !== id));
  };

  const handlePageChange = (newPage) => {    
    callback(getUsers("customers", newPage, pageSize), result => {      
      setData(result.data);
    });
  };

  const actionColumn = [
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${ statusClassMapping(params.row.isActive ? "Active" : "Inactive")}`} >
            { params.row.isActive ? "Active" : "Inactive" }
          </div>
        );
      }
    },
    {
      field: "action",
      headerName: "Opcion",
      width: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} className="link">
              <div className="viewButton">Ver</div>
            </Link>
            <div className={`${params.row.isActive ? "inactiveButton" : "activeButton"}`} onClick={() => handleActivation(params.row.email,  params.row.isActive)} >
              { params.row.isActive ? "Inactivar" : "Activar"}
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
        : prevRowCountState,
    );
  }, [response?.payload?.rowCount , setRowCountState]);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>Clientes</div>
      </div>
      <DataGrid
        className="datagrid"
        rows={data || []}
        columns={userColumns.concat(actionColumn)}
        pageSize={pageSize}
        rowCount = {rowCountState}
        loading={isloading}
        autoHeight
        paginationMode='server'
        onPageChange={handlePageChange}
        // checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Customer;