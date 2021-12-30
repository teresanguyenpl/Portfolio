import React from 'react'
import styled from 'styled-components'
import { gold, gray } from "./Styles";

const MyLine = styled.div`
position: fixed;
top: 50px;
left: 50%;
width: 15px;
height: 50%;
background-color: ${gold};
`;

const SmallLine1 = styled.div`
position: fixed;
top: 55px;
left: 35%;
width: 10px;
height: 45px;
background-color: ${gray};
`

const SmallLine2 = styled.div`
position: fixed;
top: 55px;
right: 35%;
width: 10px;
height: 45px;
background-color: ${gray};
`

const Line = () => {
    return (
        <MyLine>
            <SmallLine1 />
            <SmallLine2 />
        </MyLine>
    )
}

export default Line
