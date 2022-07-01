import React from "react";
import "./layout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import { Body, MainContainer, PageContent } from "./styled-layout-components";

const Layout = (props) => {
  return (
    <>
      <Sidebar />
      <Body>
        <Navbar />
        <PageContent>
          <MainContainer>
            {props.children}
          </MainContainer>          
        </PageContent>
      </Body>
    </>
  );
};

export default Layout;
