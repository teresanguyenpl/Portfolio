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
//Device sizes
import { devices } from './DeviceSize'

const Icon = styled.div`
@media ${devices.mobileL} {
    display: none;
}
`

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
@media ${devices.tablet} {
    @keyframes bounce {
        from {
            margin-bottom: 100%;
        }
        to {
            margin-top: 130%;
        }
    }
}
@media ${devices.mobileM} {
    img {
        width: 230px;
        height: 230px;
    }
}
@media ${devices.mobileS} {
    img {
        width: 200px;
        height: 200px;
    }
}
`

const Description = styled.h3`
position: relative;
top: 20rem;
padding: 4rem;
font-weight: 100;
text-align: center;
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
@media ${devices.laptop} {
    font-size: 20px;
}
@media ${devices.tablet} {
    top: 18rem;
    font-size: 17px;
}
@media ${devices.mobileM} {
    padding: 2.5rem;
    font-size: 14px;
}
@media ${devices.mobileS} {
    top: 16rem;
    padding: 1.5rem;
    font-size: 13px;
}
`

const Title = styled.div`
display: none;
@media ${devices.tablet} {
    display: block;
    position: relative;
    top: 16rem;
    font-weight: 100;
    text-align: center;
    h3 {
        font-size: 35px;
        color: ${gold};
    }
}
@media ${devices.mobileL} {
    top: 15rem;
}
@media ${devices.mobileM} {
    top: 16rem;
}
@media ${devices.mobileS} {
    top: 15rem;
    h3 {
        font-size: 30px;
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
    font-size: 50px;
}
@media ${devices.laptop} {
    h3 {
        font-size: 40px;
    }
    ul > li {
        font-size: 45px;
    }
}
@media ${devices.tablet} {
    position: relative;
    top: 16rem;
    text-align: center;
    right: 0;
    left: 0;
    h3 {
        display: none;
    }
    ul > li {
        font-size: 36px;
    }
}
@media ${devices.mobileL} {
    top: 14rem;
    ul > li {
        font-size: 32px;
    }
}
@media ${devices.mobileM} {
    top: 15rem;
    ul > li {
        font-size: 20px;
    }
}
@media ${devices.mobileS} {

}
`

const Title2 = styled.div`
display: none;
@media ${devices.tablet} {
    display: block;
    position: relative;
    top: 18rem;
    text-align: center;
    h3 {
        font-size: 35px;
        color: ${gold};
    }
}
@media ${devices.mobileL} {
    top: 14rem;
}
@media ${devices.mobileM} {
    top: 15rem;
}
@media ${devices.mobileS} {
    h3 {
        font-size: 30px;
    }
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
        font-size: 50px;
    }
    a:hover {
        color: ${gold};
    }
}
@media ${devices.laptop} {
    top: 43rem;
    h3 {
        font-size: 40px;
    }
    ul > li {
        a {
            font-size: 45px;
        }
    }
}
@media ${devices.tablet} {
    position: relative;
    top: 17rem;
    text-align: center;
    right: 0;
    left: 0;
    h3 {
        display: none;
    }
    ul > li {
        a {
            font-size: 36px;
        }
    }
}
@media ${devices.mobileL} {
    top: 13rem;
    ul > li {
        a {
            font-size: 32px;
        }
    }
}
@media ${devices.mobileM} {
    top: 14rem;
    ul > li {
        a {
            font-size: 30px;
        }
    }
}
@media ${devices.mobileS} {
    ul > li {
        a {
            font-size: 20px;
        }
    }
}
`

const Cleverchat = () => {
    return (
        <div>
            <Icon>
                <Social />
            </Icon>
            <Image>
                <img className='image' src={CleverChat} />
            </Image>
            <Description>
                Cleverchat is an Android application that allows users to register, log in, add friends, 
                chat with others and see the weather in different locations. This is the final group project 
                (4 people) for a class that I took in Fall 2021: TCSS 450 - Mobile Application Programming.
            </Description>
            <Title>
                <h3>Used</h3>
            </Title>
            <Used>
                <ul>
                    <li><GrHeroku /></li>
                    <li><GrNode /></li>
                    <li><SiJavascript /></li>
                    <li><SiPostman /></li>
                    <li><AiFillAndroid /></li>
                    <li><DiJava /></li>
                    <li><SiPostgresql /></li>
                    <li><h3>Used</h3></li>
                </ul>
            </Used>
            <Title2>
                <h3>Demo</h3>
            </Title2>
            <Demo>
                <ul>
                    <li><a href='https://www.youtube.com/watch?v=Orsehisceew' target="_blank"><AiFillYoutube /></a></li>
                    <li><a href='https://github.com/teresanguyenpl/CleverChat-Front' target="_blank"><AiFillGithub /></a></li>
                    <li><a href='https://github.com/teresanguyenpl/CleverChat-Back' target="_blank"><VscGithub /></a></li>
                    <li><h3>Demo</h3></li>
                </ul>
            </Demo> 
        </div>
    )
}

export default Cleverchat
