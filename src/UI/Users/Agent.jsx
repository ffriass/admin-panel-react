import React, { useContext } from "react";
import "../../components/datatable/datatable.scss";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {  statusClassMapping,  userColumns} from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { getUsers, setAgentStatus } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";
import AppContext from "../../core/store/app-context";

const Agent = (props) => {
  const [pageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [response, callback, isloading] = useFetch(
    getUsers("agents", page, pageSize)
  );
  const [actionResponse, actionCallback, actionIsloading] = useFetch();
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );
  const appContext = useContext(AppContext);

  const handleApproval = (email, status) => {  
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => { actionCallback(
            setAgentStatus({ email: email, approved: status != "Approved" }, true),
            (result) => {
              if(!result.isSuccess)
                  appContext.showAlert({ title: "Error", message: result.error.message, severity:"error" });
              else
                  appContext.showAlert({ title: "Success", message: result.message });
      
              callback(getUsers("agents", page, pageSize), (result) => {
                setData(result.data);
                // setPage(newPage);
              });
            }
          );}
        },
        {
          label: 'No'
        }
      ]
    });
  };
    


  const handlePageChange = (newPage) => {
    callback(getUsers("agents", newPage, pageSize), (result) => {
      setData(result.data);
      setPage(newPage);
    });
  };

  const actionColumn = [
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div
            className={`cellWithStatus ${statusClassMapping(
              params.row.isActive ? params.row.statusName : "Inactive"
            )}`}
          >
            {params.row.isActive && params.row.statusName == "Unknown"
              ? "Pending"
              : !params.row.isActive
              ? "Inactive"
              : params.row.statusName}
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
            <Link
              to={`/users/${params.row.id}`}
              state={params.row}
              className="link"
            >
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/users/${params.row.id}/edit`} className="link">
              <div className="neutralButton">Edit</div>
            </Link>
            <div
              className={
                params.row.statusName == "Approved"
                  ? "inactiveButton"
                  : "activeButton"
              }
              onClick={() =>
                handleApproval(params.row.email, params.row.statusName)
              }
            >
              {params.row.statusName == "Approved" ? "Disapprove" : "Approve"}
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
        <div>Agents</div>
        <Link to="/users/new" className="link">
          <AddIcon />
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data || []}
        columns={userColumns.concat(actionColumn)}
        pageSize={pageSize}
        page={page}
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

export default Agent;
