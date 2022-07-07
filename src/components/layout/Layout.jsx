import React from "react";
import "./layout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Body, MainContainer, PageContent } from "./styled-layout-components";
import VerticalBarsLoading from "../loading-indicator/Loading";

const Layout = (props) => {
  return (
    <>    
      <Sidebar />
      <Body>
        <Navbar />
        <PageContent>
          <MainContainer>
          <VerticalBarsLoading loading={false}/>
            {props.children}
          </MainContainer>          
        </PageContent>
      </Body>
    </>
  );
};

export default Layout;
