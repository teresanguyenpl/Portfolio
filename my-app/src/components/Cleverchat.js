/** 
 * Cleverchat page includes the icon, description, languages that this project used
 * and the links to github (both front-end and back-end) + youtube (demo)
*/

import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import { gold, gray, blue } from "./Styles";
//Image
import CleverChat from '../assets/Images/Cleverchat.jpg'
//React Icons
import { GrHeroku, GrNode } from "react-icons/gr"
import { SiJavascript, SiPostman, SiPostgresql } from "react-icons/si"
import { AiFillAndroid, AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { DiJava } from "react-icons/di"
import { VscGithub } from "react-icons/vsc"

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

const Description = styled.h3`
position: absolute;
top: 20rem;
padding: 4rem;
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

const Used = styled.div`
position: absolute;
top: 35rem;
right: 4rem;
opacity: 0;
animation: fadeIn 3s;
animation-delay: 0.5s;
animation-fill-mode: forwards;
h3 {
    text-align: center;
    color: ${gold};
    font-size: 45px;
    font-weight: 100;
}
ul > li {
    display: inline-block;
    padding: 1rem;
    color: ${blue};  
}
`

const Demo = styled.div`
position: absolute;
top: 48rem;
right: 4rem;
opacity: 0;
animation: fadeIn 3s;
animation-delay: 0.5s;
animation-fill-mode: forwards;
h3 {
    text-align: center;
    color: ${gold};
    font-size: 45px;
    font-weight: 100;
}
ul > li {
    display: inline-block;
    padding: 1rem;
    color: ${blue};  
    a {
        text-decoration: none;
        color: ${blue};
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
            <Used>
                <ul>
                    <li><GrHeroku size={50} /></li>
                    <li><GrNode size={50} /></li>
                    <li><SiJavascript size={50} /></li>
                    <li><SiPostman size={50} /></li>
                    <li><AiFillAndroid size={50} /></li>
                    <li><DiJava size={50} /></li>
                    <li><SiPostgresql size={50} /></li>
                    <li><h3>Used</h3></li>
                </ul>
            </Used>
            <Demo>
                <ul>
                    <li><a href='https://www.youtube.com/watch?v=Orsehisceew' target="_blank"><AiFillYoutube size={50} /></a></li>
                    <li><a href='https://github.com/teresanguyenpl/CleverChat-Front' target="_blank"><AiFillGithub size={50} /></a></li>
                    <li><a href='https://github.com/teresanguyenpl/CleverChat-Back' target="_blank"><VscGithub size={50} /></a></li>
                    <li><h3>Demo</h3></li>
                </ul>
            </Demo> 
        </div>
    )
}

export default Cleverchat
