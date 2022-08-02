import React from "react";
import "../datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { transactionsColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {  getTransactions, getTransactionsByUserId } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const Transactions = ({ userId = null, getCompleted = false }) => {
  const [pageSize] = useState(10);
  const [response, callback, isloading] = useFetch( !userId ?
    getTransactions(getCompleted, 0, pageSize) : getTransactionsByUserId(getCompleted, userId, 0, pageSize)
  );
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );

  const handlePageChange = (newPage) => {
    callback(!userId ?
      getTransactions(getCompleted, newPage, pageSize) : getTransactionsByUserId(getCompleted, userId, newPage, pageSize)/*, (result) => {
      setData(result.data);
    }*/);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Opcion",
      width: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/`} className="link">
              <div className="viewButton">Ver</div>
            </Link>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    callback(!userId ?
      getTransactions(getCompleted, 0, pageSize) : getTransactionsByUserId(getCompleted, userId, 0, pageSize));
  }, [getCompleted]);

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={response?.payload?.data || []}
        columns={transactionsColumns.concat(actionColumn)}
        pageSize={pageSize}
        rowCount={response?.payload?.rowCount || 0}
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
