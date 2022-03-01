import React from 'react'
import styled from 'styled-components'
import { gray, gold, blue } from "./Styles";
import { devices } from './DeviceSize'

const Text = styled.div`
width: 100%;
`

const HalfLeft  = styled.h1`
position: relative;
margin-left: 26%;
top: 13.5rem;
font-weight: 100;
color: ${gray};
font-size: 60px;

opacity: 0;
animation: fadeIn 3s;
animation-fill-mode: forwards;

@media ${devices.laptopL} {
    font-size: 50px;
    top: 14.5rem;
    margin-left: 25%;
}
@media ${devices.laptop} {
    position: absolute;
    top: 23rem;
    margin-left: 17%;
}
@media ${devices.tablet} {
    display: none;
}
`

const HalfRight  = styled.h1`
position: relative;
margin-left: 52%;
top: 6.5rem;
font-weight: 100;
font-size: 60px;
color: ${gold};

opacity: 0;
animation: fadeIn 3s;
animation-delay: 2s;
animation-fill-mode: forwards;

@media ${devices.laptopL} {
    font-size: 50px;
    top: 8.7rem;
}
@media ${devices.laptop} {
    // font-size: 40px;
    top: 14.7rem;
}
@media ${devices.tablet} {
    display: none;
}
`

const Bottom  = styled.h1`
position: relative;
text-align: center;
top: 12rem;
font-weight: 100;
font-size: 40px;
color: ${gray};
span {
    color: ${blue};
}
opacity: 0;
animation: fadeIn 3s;
animation-delay: 3.5s;
animation-fill-mode: forwards;

@media ${devices.laptopL} {
    font-size: 35px;
    top: 15rem;
}
@media ${devices.laptop} {
    top: 21rem;
}
@media ${devices.tablet} {
    font-size: 23px;
    top: 14rem;
}
`

const Top = styled.h1`
display: none;

@media ${devices.tablet} {
    position: relative;
    display: block;
    font-weight: 100;
    font-size: 35px;
    text-align: center;
    color: ${gold};
    top: 10rem;
    span {
        color: ${gray};
        font-size: 32px;
    }
}
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
            <Top>
                <span>Hi, I'm</span> Teresa Nguyen
            </Top>
            <Bottom>
                I love <span>Technology</span> and <span>Design</span>
            </Bottom>
        </Text>
    )
}

export default HomeText
