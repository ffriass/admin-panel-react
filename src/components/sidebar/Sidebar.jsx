import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);
    
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Logo</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <div className="title">MAIN</div>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                     </Link>
                    <div className="title">LISTS</div>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>  
                    <Link to="/orders" style={{textDecoration:"none"}}>
                        <li>
                            <ReceiptIcon className='icon' />
                            <span>Orders</span>
                        </li>
                    </Link>  
                    <Link to="/delivery" style={{textDecoration:"none"}}>
                        <li>
                            <LocalShippingIcon className='icon' />
                            <span>Delivery</span>
                        </li>
                    </Link>   
                    <div className="title">USEFULL</div>
                    <Link to="/stats" style={{textDecoration:"none"}}>
                        <li>
                            <BarChartIcon className='icon' />
                            <span>Stats</span>
                        </li>
                    </Link>  
                    <Link to="/notifications" style={{textDecoration:"none"}}>
                        <li>
                            <NotificationsIcon className='icon' />
                            <span>Notifications</span>
                        </li>
                    </Link>  
                    <div className="title">Options</div>
                    <Link to="/health-check" style={{textDecoration:"none"}}>
                        <li>
                            <MonitorHeartIcon className='icon' />
                            <span>System Health</span>
                        </li>
                    </Link>  
                    <Link to="/logs" style={{textDecoration:"none"}}>
                        <li>
                            <HistoryIcon className='icon' />
                            <span>Logs</span>
                        </li>
                    </Link>
                    <Link to="/settings" style={{textDecoration:"none"}}>
                        <li>
                            <SettingsIcon className='icon' />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <div className="title">USER</div>
                    <Link to="/profile" style={{textDecoration:"none"}}>
                        <li>
                            <AccountCircleIcon className='icon' />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <li>
                            <LogoutIcon className='icon' />
                            <span>Logout</span>
                        </li>
                    </Link>
                    
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar