import React from 'react'
import styled from 'styled-components'
import { gold } from "./Styles";
import { devices } from './DeviceSize'

const MyLine = styled.div`
position: absolute;
top: 50px;
left: 50%;
width: 15px;
height: 0;
background-color: ${gold};

animation: slideDown 3s;
animation-delay: 1s;
animation-fill-mode: forwards;

@keyframes slideDown {
    from {
        height: 0;
    }
    to {
        height: 25rem;
    }
}
@media ${devices.tablet} {
    display: none;
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
