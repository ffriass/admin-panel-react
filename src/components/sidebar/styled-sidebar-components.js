import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Sidebar = styled.div`
    position: fixed;
    height: 100%;
    width: 240px;
    /* background: #0A2558; */
    transition: all 0.5s ease;


    border-right: 0.5px solid lightgray;
    /* min-height: 100vh; */
    background-color: white;

    &.active{
        width: 60px;     
    }

`;

export const LogoDetail = styled.div`
        height: 60px;
        display: flex;
        align-items: center;
        /* justify-content: center; */

    .logo-icon{
        font-size: 28px;
        font-weight: 500;
        /* color: #fff; */
        color: #7451f8;
        min-width: 60px;
        text-align: center
    }
`;

export const LogoName = styled.span`
    /* color: #fff; */
    font-size: 24px;
    font-weight: 500;
    /* font-size: 20px; */
    
`;

export const SidebarItems = styled.ul`
    list-style: none;
    margin: 0;
    /* padding: 0; */
    padding-left: 10px;
    
    hr{
        height: 0;
        border: 0.5px solid lightgray;

    }
    .title{
        font-size: 10px;
        font-weight: bold;
        color: #999;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    
    .logout{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;

export const SidebarItem = styled.li`
    position: relative;
    list-style: none;
    /* height: 50px;  */
    padding: 5px;
    cursor: pointer;
`;

export const SidebarItemContent = styled(Link)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;

    .item-icon{
        min-width: 60px;
        text-align: center;
        font-size: 18px;
        color: #7451f8;
    }
    
    &.active{
        background: #081D45
    }

    &:hover{
        background-color: #ece8ff;
    }    
`;

export const ItemName = styled.span`
    /* color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap; */

    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`;

