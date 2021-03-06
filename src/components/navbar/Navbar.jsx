import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../core/store/theme/darkMode-context";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  console.log("Created Navbar");

  return (
    <div className='navigation-bar'>
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search ...' />
        <SearchIcon/>
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          English
        </div>
        <div className="item">
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
