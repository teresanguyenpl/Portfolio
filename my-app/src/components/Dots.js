import React from 'react'
import styled from 'styled-components'
import { gray } from "./Styles";

const MyDots = styled.div`
position: fixed;
right: 4rem;
`

const Dot = styled.hr`
display: flex;
flex-direction: column;
margin-bottom: 10px;
border-radius: 50%;
width: 10px;
height: 10px;
background-color: ${gray};
`

const Dots = () => {
    return (
        <MyDots>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
        </MyDots>
    )
}

export default Dots
