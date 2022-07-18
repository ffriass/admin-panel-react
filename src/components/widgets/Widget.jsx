import "./widget.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box, Grid, Skeleton } from "@mui/material";
import { PersonAdd, VerifiedUserTwoTone } from "@mui/icons-material";

const Widget = (props) => {

  return (
    <Grid xs={6} md={3}>
      {!props?.isLoading ? (
        <div className="widget">
          <div className="left">
            <span className="title">{props.data.title}</span>
            <span className="counter">
              {props.data?.isMoney && "$"} {props.data?.total}
            </span>
            <span className="link">{props.data.link}</span>
          </div>
          <div className="right">
            <div className={`percentage ${props.data.relativeGrowthRate >= 0 ? "positive": "negative"}`}>
              {props.data.relativeGrowthRate >= 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              {props.data.relativeGrowthRate}%
            </div>
            {props.data?.icon}
          </div>
        </div>
      ) : (
        <Skeleton variant="rectangular" height={120} className="widget"/>
      )}
    </Grid>
  );
};

export default Widget;
