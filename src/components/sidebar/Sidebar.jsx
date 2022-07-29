import React, { useContext } from "react";
import "./sidebar.scss";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../core/store/theme/darkMode-context";
import AuthContext from "../../core/store/auth-context";
import { menuItems } from "../../services/metadata/menu-items";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
  
      confirmAlert({
        title: 'Login out',
        message: 'Do you want to continue?',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>  authContext.logout()
          },
          {label: 'No' }
        ]
      });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" className="sidebar-top-item">
          <MenuIcon className="logo-icon" />
          <span className="logo-name">BarberHome</span>
        </NavLink>
      </div>
      <div className="sidebar-items">
        <ul>
          {menuItems.map((menu) => (
            <>
              <div key={menu.tag} className="subtitle">
                {menu.title}
              </div>
              {menu.subItems &&
                menu.subItems.map((subMenu, index) => (
                  <NavLink to={subMenu.link} className="sidebar-item">
                    <li key={index}>
                      {subMenu.icon}
                      <span>{subMenu.title}</span>
                    </li>
                  </NavLink>
                ))}
            </>
          ))}
          <div className="subtitle">USER</div>
          <NavLink to="/profile" className="sidebar-item">
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </NavLink>
          <a onClick={logoutHandler} className="sidebar-item">
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </a>
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
