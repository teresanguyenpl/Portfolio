import React from 'react'
import styled from 'styled-components';
import { gold, blue, gray } from "./Styles";
import avt from '../assets/Images/avt.jpg'

const AboutContain = styled.div`
position: absolute;
width: 75%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
const Picture = styled.div`
position: relative;
background-image: url(${avt});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
float: left;
width: 40%;
height: 300px;
opacity: 0.8;
mix-blend-mode: screen;
`

const Info = styled.div`
position: relative;
float: right;
width: 60%;
height: 300px;
text-align: center;
color: ${gray};
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
`

const AboutInfo = () => {
    return (
        <AboutContain>
            <Picture>
                
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
