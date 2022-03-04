import React from 'react'
import styled from 'styled-components';
import { gold, blue, gray } from "./Styles";
import Avt from '../assets/Images/Avt.jpg'
import { devices } from './DeviceSize'

const AboutContain = styled.div`
position: absolute;
width: 70%;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
`
const Picture = styled.div`
position: relative;
float: left;
width: 50%;
height: 350px;

img {
    position: relative;
    width: auto;
    height: 90%;
}

div {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 300px;
    background-color: #364859;
    height: 90%;
}

:hover {
    img {
        left: 2%;
        opacity: 0.9;
    }
    div {
        background-color: #1F3041;
        top: 8%;
    }
}

animation: slideIn 3s;
animation-fill-mode: forwards;

@keyframes slideIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.9;
    }
}

@media ${devices.laptop} {
    height: 280px;
    div {
        width: 240px;
    }
}

@media ${devices.tablet} {
    float: none;
    top: 5rem;
    width: 100%;
    text-align: center;
    div {
        display: none;
    }
}

@media ${devices.mobileM} {
    top: 6rem;
    height: 250px;
}

@media ${devices.mobileS} {
    top: 8rem;
    height: 220px;
}
`

const Info = styled.div`
position: relative;
float: right;
width: 50%;
height: 350px;
text-align: center;
color: ${gray};

animation: slideIn 3s;
animation-fill-mode: forwards;

@media ${devices.laptop} {
    top: 1rem;
}

@media ${devices.tablet} {
    float: none;
    top: 7rem;
    width: 100%;
}

@media ${devices.mobileM} {
    top: 8rem;
}

@media ${devices.mobileS} {
    top: 8rem;
}
`

const Text = styled.h2`
position: relative;
font-size: 30px;
font-weight: 100;
span {
    color: ${gold};
}
span2 {
    color: ${blue};
}
@media ${devices.laptop} {
    font-size: 22px;
}
@media ${devices.tablet} {
    font-size: 19px;
}
@media ${devices.mobileS} {
    font-size: 15px;
}
`

const AboutInfo = () => {
    return (
        <AboutContain>
            <Picture>
                <div />
                <img src={Avt} />
            </Picture>
            <Info>
                <Text>I’m an <span>undergraduate</span> student</Text> 
                <Text>majoring in <span>Computer Science and System</span></Text>
                <Text>at University of Washington</Text>
                <Text>I like building <span2>Websites</span2></Text>
            </Info>
        </AboutContain>
    )
}

export default AboutInfo
