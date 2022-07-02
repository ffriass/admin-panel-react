import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
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
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" className='sidebar-top-item'>
          <MenuIcon className="logo-icon" />
          <span className="logo-name">BarberHome</span>
        </NavLink>
      </div>
      <hr />
      <div className="sidebar-items">
        <ul>
          <div className="subtitle">MAIN</div>
          <NavLink to="/" className='sidebar-item'>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <div className="subtitle">LISTS</div>
          <NavLink to="/users" className='sidebar-item'>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </NavLink>
          <NavLink to="/products" className='sidebar-item'>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </NavLink>
          <NavLink to="/orders" className='sidebar-item'>
            <li>
              <ReceiptIcon className="icon" />
              <span>Orders</span>
            </li>
          </NavLink>
          <NavLink to="/delivery" className='sidebar-item'>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </NavLink>
          <div className="subtitle">USEFULL</div>
          <NavLink to="/stats" className='sidebar-item'>
            <li>
              <BarChartIcon className="icon" />
              <span>Stats</span>
            </li>
          </NavLink>
          <NavLink to="/notifications" className='sidebar-item'>
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
          </NavLink>
          <div className="subtitle">Options</div>
          <NavLink to="/health-check" className='sidebar-item'>
            <li>
              <MonitorHeartIcon className="icon" />
              <span>System Health</span>
            </li>
          </NavLink>
          <NavLink to="/logs" className='sidebar-item'>
            <li>
              <HistoryIcon className="icon" />
              <span>Logs</span>
            </li>
          </NavLink>
          <NavLink to="/settings" className='sidebar-item'>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </NavLink>
          <div className="subtitle">USER</div>
          <NavLink to="/profile" className='sidebar-item'>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </NavLink>
          <NavLink to="/login" className='sidebar-item'>
            <li>
              <LogoutIcon  className="icon" />
              <span>Logout</span>
            </li>
          </NavLink>
        </ul>
      </div>  
      <div className="title">THEME</div> 
      
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
