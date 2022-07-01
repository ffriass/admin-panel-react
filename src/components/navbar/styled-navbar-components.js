import styled from "styled-components";

export const NavigationBar = styled.nav`
    height: 60px;
    border-bottom: 0.5px solid rgb(231, 228, 228);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
    background-color: white;
    position: fixed;
    width: calc(100% - 240px);
    left: 240px;
    z-index: 100;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: transparent;
    justify-content: space-between;
`;

export const NavbarDetail = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;

    .sidebarBtnIcon{
        font-size: 35px;
        margin-right: 10px;
    }
`;

export const NavbarTitle = styled.span`

`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;

    input {
        width: 400px;
        border: none;
        outline: none;
        height: 30px;
        background: transparent;

        &::placeholder {
            font-size: 12px;
        }
    }    


`;

export const NavbarItems = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;

    .icon {
        font-size: 20px;
        cursor: pointer;

        &:hover{
        color: #7451f8;
        }
    }
`;

export const NavCountIndicator = styled.div`
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: -5px;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;