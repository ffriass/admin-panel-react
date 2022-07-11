import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Grid } from '@mui/material';
import { PersonAdd, VerifiedUserTwoTone } from '@mui/icons-material';

const Widget = ({ type }) => {

  let data;
   //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
      case "agents":
        data = {
          title: "AGENTS",
          isMoney: false,
          link: "See all agents",
          icon: (
            <PersonIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "customers":
        data = {
          title: "CUSTOMERS",
          isMoney: true,
          link: "View all customers",
          icon: (
            <PersonIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }
  return (
    <Grid xs={6} md={3}>
      <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
              <ArrowDropUpIcon/>
              {diff}%
            </div> 
            {data.icon}      
        </div>        
    </div>
    </Grid>    
  )
}

export default Widget