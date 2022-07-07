import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import {
  ItemName,
  LogoDetail,
  LogoName,
  Sidebar,
  SidebarItem,
  SidebarItemContent,
  SidebarItems,
} from "./styled-sidebar-components";

const Sidebar2 = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <Sidebar>
      <LogoDetail>
        <BarChartIcon className="logo-icon" />
        <LogoName> BarberHome</LogoName>
      </LogoDetail>
      <hr />
      <SidebarItems>
        <div className="title">MAIN</div>
        <SidebarItem>
          <SidebarItemContent to="/">
            <DashboardIcon className="item-icon" />
            <ItemName>Dashboard</ItemName>
          </SidebarItemContent>
        </SidebarItem>
        <div className="title">MAIN</div>
        <SidebarItem>
          <SidebarItemContent to="/users">
            <DashboardIcon className="item-icon" />
            <ItemName>Users</ItemName>
          </SidebarItemContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarItemContent to="/">
            <DashboardIcon className="item-icon" />
            <ItemName>Dashboard</ItemName>
          </SidebarItemContent>
        </SidebarItem>
        <div className="title">MAIN</div>
        <SidebarItem>
          <SidebarItemContent to="/">
            <DashboardIcon className="item-icon" />
            <ItemName>Dashboard</ItemName>
          </SidebarItemContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarItemContent to="/">
            <DashboardIcon className="item-icon" />
            <ItemName>Dashboard</ItemName>
          </SidebarItemContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarItemContent to="/">
            <DashboardIcon className="item-icon" />
            <ItemName>Dashboard</ItemName>
          </SidebarItemContent>
        </SidebarItem>

        <SidebarItem className="logout">
          <SidebarItemContent to="/">
            <LogoutIcon className="item-icon" />
            <ItemName>Logout</ItemName>
          </SidebarItemContent>
        </SidebarItem>
      </SidebarItems>
    </Sidebar>
  );
};

export default Sidebar2;
