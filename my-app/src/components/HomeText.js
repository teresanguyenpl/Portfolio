import React from 'react'
import styled from 'styled-components'
import { gray, gold, blue } from "./Styles";

const Text = styled.div`
width: 100%;
`

const HalfLeft  = styled.h1`
position: fixed;
margin-left: 25%;
top: 45%;
font-weight: 100;
font-size: 55px;
color: ${gray};
`

const HalfRight  = styled.h1`
position: fixed;
margin-left: 52%;
top: 45%;
font-weight: 100;
font-size: 55px;
color: ${gold};
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
