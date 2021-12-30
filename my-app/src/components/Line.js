import React from 'react'
import styled from 'styled-components'
import { gold } from "./Styles";

const MyLine = styled.div`
position: fixed;
top: 50px;
left: 50%;
width: 15px;
height: 0;
background-color: ${gold};

animation: slideDown 3s;
animation-delay: 2s;
animation-fill-mode: forwards;

@keyframes slideDown {
    from {
        height: 0;
    }
    to {
        height: 50%;
    }
}
`;


const Line = () => {
    return (
        <div>
        <MyLine />
        </div>
        
    )
}

export default Line
