import React from "react";
import "./list.scss";
import DataTable from "../../components/datatable/DataTable";
import Layout from "../../components/layout/Layout";
import {
  userColumns,
  userRows
} from "../../services/metadata/datatable-definitions";
import Transactions from "../../components/table/Transactions";
import { FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";
import Balance from "../../components/table/Balance";
import { useState } from "react";
import Chart from "../../components/chart/Chart";

const Orders = () => {
  const [showPending, setShowPending] = useState(true);

  const handleBalanceChange = (e) => {
    setShowPending(!showPending);
  };
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={5}>
          {/* <div className="userFinantialDetailTitle">
            <label>Current balance detail</label>
          </div> */}
          <FormGroup>
            <div className="userFinantialDetailTitle">
            <label className="finItem title">
              Current {showPending ? "pending" : "global"} balance detail
            </label>
            <FormControlLabel
              className="finItem"
              control={<Switch onChange={handleBalanceChange} defaultChecked />}
              label="Pending"
            />
            </div>
            {/* <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
          </FormGroup>
          <Balance pending={showPending} />
        </Grid>
        <Grid s={12} md={7} style={{}}>
          <Chart aspect={4 / 1} title="Global revenue ( Last 6 Months)" />
        </Grid>
      </Grid>
      <div className="bottom">
        <h5 className="title">All Transactions</h5>
        <Transactions/>
      </div>
    </div>
  );
};

export default Orders;
