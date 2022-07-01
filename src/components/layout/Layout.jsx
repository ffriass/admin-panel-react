import React from "react";
import "./layout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
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
