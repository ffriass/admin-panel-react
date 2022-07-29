import React from "react";
import "../datatable/datatable.scss";
import "./table.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { balanceColumns } from "../../services/metadata/datatable-definitions";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import {  getAgentBalanceDetail, getBalanceDetail } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";

const Balance = ({ pending = false, agentId = null, hideFooter = true }) => {
  const [pageSize] = useState(10);
  const [response, callback, isloading] = useFetch();
  const [data, setData] = useState(response?.payload?.data);
  const [rowCountState, setRowCountState] = useState(
    response?.payload?.rowCount || 0
  );

  const handlePageChange = (newPage) => {
    // callback(userId ?
    //   getTransactions(newPage, pageSize) : getTransactionsByUserId(userId, newPage, pageSize), (result) => {
    //   setData(result.data);
    // });
  };

  const total = [{
    paymentMethod: "Total",
    paymentType: 0,
    totalRevenue: data?.reduce((sum, obj) => sum + obj.totalRevenue, 0),
    benefit: data?.reduce((sum, obj) => sum + obj.benefit, 0),
    collect: data?.reduce((sum, obj) => sum + obj.collect, 0),
    pay: data?.reduce((sum, obj) => sum + obj.pay, 0),
    balance: data?.reduce((sum, obj) => sum + obj.balance, 0),
}]

  useEffect(() => {

    if(!agentId)
      callback(getBalanceDetail(pending))
    else
      callback(getAgentBalanceDetail(agentId))

    setData(response?.payload?.data);
    setRowCountState((prevRowCountState) =>
      response?.payload?.rowCount !== undefined
        ? response?.payload?.rowCount
        : prevRowCountState
    );
  }, [response?.payload?.rowCount, setRowCountState, pending]);

  return (
    <div className="datatable">
      <DataGrid
        getRowId={(row) => row.paymentType}
        className="datagrid"
        rows={data?.concat(total) || []}
        columns={balanceColumns}
        pageSize={pageSize}
        rowCount={rowCountState}
        loading={isloading}
        autoHeight
        hideFooter={hideFooter}
        paginationMode="server"
        getRowClassName={(params) => `${params.row.paymentType == 0 ? "last-row":""}`}
        //onPageChange={handlePageChange}
        // checkboxSelection
        //components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Balance;
