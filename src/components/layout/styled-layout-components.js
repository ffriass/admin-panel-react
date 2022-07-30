import styled from "styled-components";

export const Body = styled.section`
    padding-bottom: 10;
    position: relative;
    min-height: 100vh;
    width: calc(100% - 240px);
    left: 240px;
    transition: all 0.5s ease;
    
    @media (max-width: 700px) {
        width: calc(100% - 60px);
        left:60px;
}

    @media (max-width: 1150px) and (min-width: 699px){
        width: calc(100% - 150px);
        left: 150px;
}
`;

export const PageContent = styled.div`
    display: flex;
`;
export const MainContainer = styled.div`  
    margin-top: 60px;
    width:100%;
    padding-left: 2%;
    padding-right: 2%;
`;