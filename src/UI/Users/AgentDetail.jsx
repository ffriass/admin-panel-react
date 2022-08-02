import "./agent-detail.scss";
import Transactions from "../../components/table/Transactions";
import { useParams, useLocation } from "react-router-dom";
import UserInfoCard from "../../components/card/UserInfoCard";
import { getAgentAvailabilityById } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";
import { FormControlLabel, Grid, Skeleton, Switch } from "@mui/material";
import Balance from "../../components/table/Balance";
import { useState } from "react";

const AgentDetail = () => {
  const { userId, email } = useParams();
  const [response, callback, isloading] = useFetch(getAgentAvailabilityById(userId));
  const [completed, setCompleted] = useState(true);
  const location = useLocation();

  const handleTransChange = (e) => {
    console.log(e.target.value)
    console.log(completed)
    setCompleted(!completed)
    console.log(completed)
    //loadServices(getServices());
  };

  return (
    <div className="singleContainer">
      <div className="top">
        <div className="left">
          {!isloading ? <UserInfoCard user={response?.payload?.data} userType="agent" userId={userId}/>:
          <Skeleton variant="rectangular" height={80} /> }
        </div>
        <div className="right">
          <Grid container className="userFinantialDetailTitle">
            <label>Detalle del balance actual</label>
          </Grid>
          <div>
            <Balance agentId={userId}/>
          </div>
          <Grid container className="userFinantialDetail">
            <button className="finItem active">Enviar pago</button>
          </Grid>
        </div>
      </div>
      <div className="bottom">
        <div className="titleHeader">
          <label className="titleItem text">Servicios atendidos por { <strong>{response?.payload?.data?.agentName}</strong> ?? " este usuario"}</label>
          <FormControlLabel
              className="titleItem"
              control={<Switch onChange={handleTransChange} defaultChecked />}
              label="Completadas"
            />
        </div>     
        
        <Transactions getCompleted={completed} userId={userId} /> 
      
      </div>
    </div>
  );
};

export default AgentDetail;
