import React from "react";
import "./list.scss";
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
        <Grid sm={12} md={12} lg={5} className="box-shadow" style={{marginBottom:5}}>        
          <FormGroup>
            <div className="userFinantialDetailTitle">
            <label className="finItem title">
              Balance actual {showPending ? "pendiente" : "global"}
            </label>
            <FormControlLabel
              className="finItem"
              control={<Switch onChange={handleBalanceChange} defaultChecked />}
              label="Pendiente"
            />
            </div>
            {/* <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
          </FormGroup>
          <Balance pending={showPending} />
        </Grid>
        <Grid md={12} lg={7}>
          <Chart aspect={3 / 1} />
        </Grid>
      </Grid>
      <div className="bottom box-shadow">
        <h5 className="title">Todas las ordenes</h5>
        <Transactions getCompleted={true}/>
      </div>
    </div>
  );
};

export default Orders;
