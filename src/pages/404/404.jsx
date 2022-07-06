import React from "react";
import "./404.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="container-404">
      <h1 class="first-four">4</h1>
      <div class="cog-wheel1">
        <div class="cog1">
          <div class="top-tooth"></div>
          <div class="down-tooth"></div>
          <div class="left-top-tooth"></div>
          <div class="left-down-tooth"></div>
          <div class="right-top-tooth"></div>
          <div class="right-down-tooth"></div>
          <div class="left-tooth"></div>
          <div class="right-tooth"></div>
        </div>
      </div>

      <div class="cog-wheel2">
        <div class="cog2">
          <div class="top-tooth"></div>
          <div class="down-tooth"></div>
          <div class="left-top-tooth"></div>
          <div class="left-down-tooth"></div>
          <div class="right-top-tooth"></div>
          <div class="right-down-tooth"></div>
          <div class="left-tooth"></div>
          <div class="right-tooth"></div>
        </div>
      </div>
      <h1 class="second-four">4</h1>
      <p class="wrong-para">Uh Oh! Page not found!</p>
      <div onClick={() => navigate(-1)} className="backButton">
        <ArrowBackIcon /> Go back
      </div>
    </div>
  );
};

export default NotFound;
