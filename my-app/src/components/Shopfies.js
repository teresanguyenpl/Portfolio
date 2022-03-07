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

const Description = styled.h2`
position: absolute;
top: 20rem;
padding: 4rem;
font-weight: 100;
color: ${gray};
opacity: 0;
animation: fadeIn 3s;
animation-delay: 0.5s;
animation-fill-mode: forwards;
text-align: center;

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
    font-size: 17px;
}
@media ${devices.mobileM} {
    padding: 2.5rem;
    font-size: 15px;
}
@media ${devices.mobileS} {
    top: 18rem;
    padding: 2rem;
    font-size: 14px;
}
`

const Title = styled.div`
display: none;
@media ${devices.tablet} {
    display: block;
    position: relative;
    top: 35rem;
    font-weight: 100;
    text-align: center;
    h3 {
        font-size: 35px;
        color: ${gold};
    }
}
@media ${devices.mobileL} {
    font-size: 30px;
    top: 41rem;
}
@media ${devices.mobileM} {
    font-size: 25px;
    top: 38rem;
}
@media ${devices.mobileS} {
    top: 35rem;
    font-size: 23px;
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
h2 {
    display: none;
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
    top: 35rem;
    text-align: center;
    right: 0;
    left: 0;
    h3 {
        display: none;
    }
    ul > li {
        font-size: 38px;
    }
}
@media ${devices.mobileL} {
    top: 40rem;
    ul > li {
        font-size: 33px;
    }
}
@media ${devices.mobileM} {
    top: 37rem;
    ul > li {
        font-size: 25px;
    }
}
@media ${devices.mobileS} {
    top: 34rem;
    ul > li {
        font-size: 16px;
    }
}
`

const Title2 = styled.div`
display: none;
@media ${devices.tablet} {
    display: block;
    position: relative;
    top: 35rem;
    text-align: center;
    h3 {
        font-size: 35px;
        color: ${gold};
    }
}
@media ${devices.mobileL} {
    top: 42rem;
}
@media ${devices.mobileM} {
    top: 38rem;
}
@media ${devices.mobileS} {
    top: 34rem;
    font-size: 23px;
}
`

const Demo = styled.div`
position: absolute;
top: 46rem;
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
    top: 34rem;
    text-align: center;
    right: 0;
    left: 0;
    h3 {
        display: none;
    }
}
@media ${devices.mobileL} {
    top: 40rem;
    h3 {
        font-size: 35px;
    }
    ul > li {
        a {
            font-size: 37px;
        }
    }
}
@media ${devices.mobileM} {
    top: 37rem;
    h3 {
        font-size: 30px;
    }
    ul > li {
        a {
            font-size: 30px;
        }
    }
}
@media ${devices.mobileS} {
    top: 33rem;
    h3 {
        font-size: 18px;
    }
    ul > li {
        a {
            font-size: 20px;
        }
    }
}
`


const TheShopfies = () => {
    return (
        <div>
            <Icon>
                <Social />
            </Icon>
            <Image>
                <img className='image' src={Shopfies} />
            </Image>
            <Description>
                This is the final group project (4 people) for a class that I took in Fall 2021: TCSS 445 - Database Systems Design. 
                This project gives me a lot of new knowledge. I learned a lot about database, including creating tables, adding rows, creating database query, gcloud, html, css and also php. 
                I also learned how to create relation database schema, ER diagram and BCNF.
            </Description>
            <Title>
                <h3>Used</h3>
            </Title>
            <Used>
                <ul>
                    <li><SiPhp /></li>
                    <li><AiFillHtml5 /></li>
                    <li><CgCloud /></li>
                    <li><DiCss3 /></li>
                    <li><DiBootstrap /></li>
                    <li><h3>Used</h3></li>
                </ul>
            </Used>
            <Title2>
                <h3>Demo</h3>
            </Title2>
            <Demo>
                <ul>
                    <li><a href='https://github.com/teresanguyenpl/Shopfies-1' target="_blank"><AiFillGithub /></a></li>
                    <li><h3>Demo</h3></li>
                </ul>
            </Demo> 
        </div>
    )
}

export default TheShopfies
