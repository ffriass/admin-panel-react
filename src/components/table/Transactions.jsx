import React from "react";
import "../datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { transactionsColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import {  getTransactions, getTransactionsByUserId } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const Transactions = ({ userId = null, getCompleted = false }) => {
  const [pageSize] = useState(10);
  const [completed, setCompleted] = useState(getCompleted);
  const [response, callback, isloading] = useFetch( !userId ?
    getTransactions(completed, 0, pageSize) : getTransactionsByUserId(completed, userId, 0, pageSize)
  );
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );

  const handlePageChange = (newPage) => {
    callback(!userId ?
      getTransactions(completed, newPage, pageSize) : getTransactionsByUserId(completed, userId, newPage, pageSize), (result) => {
      setData(result.data);
    });
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
            <Link to={`/`} className="link">
              <div className="viewButton">View</div>
            </Link>
            {/* <Link to={`/users/${params.row.id}/edit`} className="link">
              <div className="editButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
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
      <DataGrid
        className="datagrid"
        rows={data || []}
        columns={transactionsColumns.concat(actionColumn)}
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

export default Transactions;
