import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Skeleton, Typography } from "@mui/material";

const Featured = (props) => {
  return (
    <div className="featured">
      <div className="top">
        {!props.isLoading ? (
          <h1 className="title">Total Revenue</h1>
        ) : (
          <Skeleton width={"30%"} />
        )}
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          {!props.isLoading ? (
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          ) : (
            <Skeleton height={"100%"} widh={"100%"} variant="circular" />
          )}
        </div>
        <p className="title">Total sales made today</p>
        {!props.isLoading ? (
          <p className="amount">$420</p>
        ) : (
          <Skeleton
            className="amount"
            variant="text"
            height={50}
            widh={"10%"}
          />
        )}
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        {!props.isLoading ? (
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <ArrowDropDownIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <ArrowDropUpIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <ArrowDropUpIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
          </div>
        ) : (
          <Box className="summary" >
            <Skeleton variant="rectangular" height={80} className="widget" />            
            <Skeleton variant="rectangular" height={80} className="widget" />            
            <Skeleton variant="rectangular" height={80} className="widget" />            
          </Box>
        )}
      </div>
    </div>
  );
};

export default Featured;
