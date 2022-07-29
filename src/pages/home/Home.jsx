import React, { useContext } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Transactions from "../../components/table/Transactions";
import Grid from "@mui/material/Grid";
import { Box, Container, Stack } from "@mui/material";
import Layout from "../../components/layout/Layout";
import AppContext from "../../core/store/app-context";
import useFetch from "../../core/hooks/useFetch";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { getGroupedUsersCount } from "../../services/api/actions";

const extractWidgetData = (type, data) => {
  let extractedData ={};
  switch (type) {
    case "agents":
      extractedData = {
        ...data?.Outsourcing,
        title: "AGENTS",
        isMoney: false,
        link: "See all agents",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)"
            }}
          />
        )
      };
      break;
    case "order":
      extractedData = {
        ...data?.Outsourcing, //TODO: chnage later
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod"
            }}
          />
        )
      };
      break;
    case "customers":
      extractedData = {
        ...data?.Customer,
        title: "CUSTOMERS",
        isMoney: true,
        link: "View all customers",
        icon: (
          <PersonIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        )
      };
      break;
    case "balance":
      extractedData = {
        ...data?.Outsourcing,//TODO: chnages later
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple"
            }}
          />
        )
      };
      break;
    default:
      break;
  }
  return extractedData;
}

const Home = () => {
  const appContext = useContext(AppContext);
  const [usersCountResponse, usersCountCallback, usersCountIsLoading] = useFetch(getGroupedUsersCount())
  //const [transResponse, transCallback, transCountIsLoading] = useFetch(getTransactions(0, 2))

  return (
    <Layout>
      <div className="homeContainer">
        <Grid container className="widgets">
          <Widget isLoading={usersCountIsLoading} data={extractWidgetData("agents", usersCountResponse?.payload?.data)} />
          <Widget isLoading={false} data={extractWidgetData("order", usersCountResponse?.payload?.data)} />
          <Widget isLoading={usersCountIsLoading} data={extractWidgetData("customers", usersCountResponse?.payload?.data)} />
          <Widget isLoading={false} data={extractWidgetData("balance", usersCountResponse?.payload?.data)} />
        </Grid>
        <Grid container className="charts">
          <Grid xs={12} md={5}>
            <Featured />
          </Grid>
          <Grid xs={12} md={7}>
            <Chart title="Last 6 months Revenue" aspect={2 / 1} />
          </Grid>
        </Grid>
        <div className="listContainer">
          <div className="listTitle">Lastest Transactions</div>
          <Transactions />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
