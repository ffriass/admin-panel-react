import React, { useContext } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import Grid from "@mui/material/Grid";
import { Box, Container, Stack } from "@mui/material";
import Layout from "../../components/layout/Layout";
import AppContext from "../../core/store/app-context";
import useFetch from "../../core/hooks/useFetch";
import { getServices } from "../../services/api/actions";

const Home = () => {
  const appContext = useContext(AppContext);
  const [response, callback, isloading] = useFetch(getServices())
  return (
    <Layout>
      <div className="homeContainer">
        <Grid container className="widgets">
          <Widget isloading type="agents" />
          <Widget isloading type="order" />
          <Widget isloading type="customers" />
          <Widget isloading type="balance" />
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
          <List />
        </div>
      </div>
    </Layout>
  );
};

// const Home = () => {
//   return (
//     <div className='home'>
//        <Sidebar/>
//        <div className="homeContainer">
//         <Navbar/>
//         <div className="widgets">
//           <Widget type="user" />
//           <Widget type="order" />
//           <Widget type="earning" />
//           <Widget type="balance" />
//         </div>
//         <div className="charts">
//         <Featured/>
//         <Chart title="Last 6 months Revenue" aspect={2/1}/>
//        </div>
//        <div className="listContainer">
//         <div className="listTitle">Lastest Transactions</div>
//         <List/>
//        </div>
//        </div>
//     </div>
//   )
// }
export default Home;
