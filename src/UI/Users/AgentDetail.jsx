import "./agent-detail.scss";
import Transactions from "../../components/table/Transactions";
import { useParams, useLocation } from "react-router-dom";
import UserInfoCard from "../../components/card/UserInfoCard";
import { getAgentAvailabilityById } from "../../services/api/actions";
import useFetch from "../../core/hooks/useFetch";
import { Grid, Skeleton } from "@mui/material";
import Balance from "../../components/table/Balance";

const AgentDetail = () => {
  const { userId, email } = useParams();
  const [response, callback, isloading] = useFetch(getAgentAvailabilityById(userId));
  const location = useLocation();

  const handleFetch = () => {

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
            <label>Current balance detail</label>
          </Grid>
          <div>
            <Balance agentId={userId}/>
          </div>
          <Grid container className="userFinantialDetail">
            <button className="finItem active">Mark as paid</button>
          </Grid>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Services attended by { <strong>{response?.payload?.data?.agentName}</strong> ?? "this agent"}</h1>
        <Transactions userId={userId} />
      </div>
    </div>
  );
};

export default AgentDetail;
