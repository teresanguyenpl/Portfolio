import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import { gold, gray } from "./Styles";
import CleverChat from '../assets/Images/Cleverchat.jpg'

const Image = styled.div`
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
img {
    width: 250px;
    height: 250px;
    animation: bounce 1.5s;
    animation-fill-mode: forwards;
}
@keyframes bounce {
    from {
        margin-bottom: 100%;
    }
    to {
        margin-top: 150%;
    }
}
`

const Description = styled.h2`
position: absolute;
top: 20rem;
padding:4rem;
font-weight: 100;
color: ${gray};
opacity: 0;
animation: fadeIn 3s;
animation-delay: 0.5s;
animation-fill-mode: forwards;

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

const Cleverchat = () => {
    return (
        <div>
            <Social />
            <Image>
                <img className='image' src={CleverChat} />
            </Image>
            <Description>
                Cleverchat is an Android application that allows users to register, log in, add friends, 
                chat with others and see the weather in different locations. This is the final group project 
                (4 people) for a class that I took in Fall 2021: TCSS 450 - Mobile Application Programming.
            </Description>
        </div>
    )
}

export default Cleverchat
