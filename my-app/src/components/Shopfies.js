/** 
 * Shopfies page includes the icon, description, languages that this project used
 * and the link to github 
*/

import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import { gold, gray, blue } from "./Styles";
//Image
import Shopfies from '../assets/Images/Shopfies.jpg'
//React Icons
import { SiPhp } from "react-icons/si"
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai"
import { CgCloud } from "react-icons/cg"
import { DiCss3, DiBootstrap } from "react-icons/di"

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
    a:hover {
        color: ${gold};
    }
}
`

const Shopfiess = () => {
    return (
        <div>
            <Social />
            <Image>
                <img className='image' src={Shopfies} />
            </Image>
            <Description>
                This is the final group project (4 people) for a class that I took in Fall 2021: TCSS 445 - Database Systems Design. 
                This project gives me a lot of new knowledge. I learned a lot about database, including creating tables, adding rows, creating database query, gcloud, html, css and also php. 
                I also learned how to create relation database schema, ER diagram and BCNF.
            </Description>
            <Used>
                <ul>
                    <li><SiPhp size={50} /></li>
                    <li><AiFillHtml5 size={50} /></li>
                    <li><CgCloud size={50} /></li>
                    <li><DiCss3 size={50} /></li>
                    <li><DiBootstrap size={50} /></li>
                    <li><h3>Used</h3></li>
                </ul>
            </Used>
            <Demo>
                <ul>
                    <li><a href='https://github.com/teresanguyenpl/Shopfies-1' target="_blank"><AiFillGithub size={50} /></a></li>
                    <li><h3>Demo</h3></li>
                </ul>
            </Demo> 
        </div>
    )
}

export default Shopfiess
