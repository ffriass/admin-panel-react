import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { getServices } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const DataTable = (props, colums, rows = []) => {
  const [data, setData] = useState(userRows);
  //const [response, callback, isloading] = useFetch(getServices())
  //console.log("Datatable ");
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
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
              <div className="editButton">Edit</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)} >
              Delete
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div>{props.title}</div>
        <Link to="/users/new" className="link">
          <AddIcon />
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={2}
        rowsPerPageOptions={[10]}
        //loading={isloading}
        autoHeight 
        onPageChange={(page) => {alert(page)}}
        // checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DataTable;
