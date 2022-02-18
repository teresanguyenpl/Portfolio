import React from 'react'
import styled from 'styled-components'
import { gray, gold, blue } from "./Styles";
import { devices } from './DeviceSize'

const Text = styled.div`
width: 100%;
`

const HalfLeft  = styled.h1`
position: relative;
margin-left: 30%;
top: 220px;
font-weight: 100;
color: ${gray};
font-size: 60px;

opacity: 0;
animation: fadeIn 3s;
animation-fill-mode: forwards;


@media ${devices.laptopL} {
    font-size: 55px;
    top: 220px;
    margin-left: 27%;
}
@media ${devices.laptop} {
    font-size: 40px;
}

`

const HalfRight  = styled.h1`
position: fixed;
margin-left: 52%;
top: 45%;
font-weight: 100;
font-size: 55px;
color: ${gold};

opacity: 0;
animation: fadeIn 3s;
animation-delay: 2s;
animation-fill-mode: forwards;
`

const Bottom  = styled.h1`
position: relative;
text-align: center;
top: 350px;
font-weight: 100;
font-size: 40px;
color: ${gray};
span {
    color: ${blue};
}
opacity: 0;
animation: fadeIn 3s;
animation-delay: 4s;
animation-fill-mode: forwards;
`

const HomeText = () => {
    return (
        <Text>
            <HalfLeft>
                Hi, I'm
            </HalfLeft>
            <HalfRight>
                eresa Nguyen
            </HalfRight>
            <Bottom>
                I love <span>Technology</span> and <span>Design</span>
            </Bottom>
        </Text>
    )
}

export default HomeText
