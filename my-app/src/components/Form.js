/** 
 * Form page includes the icon, description, languages that this project used
 * and the link to github 
*/

import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import { gold, gray, blue } from "./Styles";
//Image
import Form from '../assets/Images/Form.jpg'
//React Icons
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
//Device sizes
import { devices } from './DeviceSize'

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
position: relative;
top: 23rem;
font-weight: 100;
padding: 2rem;
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
`

const Used = styled.div`
position: absolute;
top: 32rem;
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
@media ${devices.mobileL} {
    h3 {
        font-size: 35px;
    }
    ul > li {
        font-size: 37px;
    }
}
`

const Demo = styled.div`
position: absolute;
top: 45rem;
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
@media ${devices.laptop} {
    top: 43rem;
    h3 {
        font-size: 40px;
    }
    ul > li {
        font-size: 45px;
    }
}
@media ${devices.mobileL} {
    h3 {
        font-size: 35px;
    }
    ul > li {
        font-size: 37px;
    }
}
`

const TheForm = () => {
    return (
        <div>
            <Social />
            <Image>
                <img className='image' src={Form} />
            </Image>
            <Description>
                A responsive and well-designed sign in - sign up form using HTML and CSS
            </Description>
            <Used>
                <ul>
                    <li><AiFillHtml5 /></li>
                    <li><DiCss3 /></li>
                    <li><h3>Used</h3></li>
                </ul>
            </Used>
            <Demo>
                <ul>
                    <li><a href='https://github.com/teresanguyenpl/SignIn-Signup-Form' target="_blank"><AiFillGithub size={50} /></a></li>
                    <li><h3>Demo</h3></li>
                </ul>
            </Demo> 
        </div>
    )
}

export default TheForm
