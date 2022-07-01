import React from "react";
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

const Home = () => {
  return (
    <Layout>
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 months Revenue" aspect={2 / 1} />
        </div>
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
