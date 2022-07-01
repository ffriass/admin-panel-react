
import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Navbar, NavbarDetail, NavbarItem, NavbarItems, NavbarTitle, SearchBox } from './styled-navbar-components';

const Navbar2 = () => {

   const { dispatch } = useContext(DarkModeContext);
  return (
    <Navbar>
      <NavbarDetail>
        <MenuIcon/>
        <NavbarTitle>Dashboard</NavbarTitle>
      </NavbarDetail>
      <SearchBox>
      <input type="text" placeholder="Search..."/>
      <SearchIcon className='bx-search'/>
      </SearchBox>
      <NavbarItems>
        <NavbarItem>
          <DarkModeOutlinedIcon className="icon"
          onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </NavbarItem>
        <NavbarItem>
          <LanguageOutlinedIcon className="icon" />
          English
        </NavbarItem>
        <NavbarItem>
          <NotificationsNoneOutlinedIcon className="icon" />
        </NavbarItem>
      </NavbarItems>

    </Navbar>
  )
}

export default Navbar2