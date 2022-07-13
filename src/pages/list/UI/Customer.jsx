import React from 'react'
import "../../../components/datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatable-source";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { getServices } from "../../../services/api/actions";
import useFetch from "../../../core/hooks/useFetch";
import DataTable from '../../../components/datatable/DataTable';

const Customer = () => {
  return (
    <DataTable title="Customers list"/>
  )
}

export default Customer;