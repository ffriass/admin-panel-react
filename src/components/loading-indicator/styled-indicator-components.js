import styled from "styled-components";
import { keyframes } from 'styled-components';

const verticalBarsLoadingAnimation = keyframes`
    0% {
        top: 8px;
        height: 64px;
        }
        50%,
        100% {
        top: 24px;
        height: 32px;
        }
`;
export const BarsLoading = styled.div`
    display:${props => props.loading ? 'inline-block' : 'none'};
    position: fixed;
    z-index:100 ;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.501);    
    animation:${verticalBarsLoadingAnimation};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
    max-width: 100%;
    max-height: 100%;
    overflow: auto;    

    div{
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: ${verticalBarsLoadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }

    div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }

    div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
`;
export const Bar = styled.div``

