import React from 'react'
import styled from 'styled-components'
import { gold, blue, gray } from "./Styles";
import { devices } from './DeviceSize'


const Contain = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
margin-top: 50px;
margin-left: 20%;
margin-right: 20%;
border-bottom: 0.01em solid ${gray};
border-top: 5px solid ${gold};
border-right: 1px solid ${gray};
border-left: 1px solid ${gray};

opacity: 0;
animation: fadeIn 1s;
animation-fill-mode: forwards;

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

ul {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    padding: 5px 10px;
    a {
        text-decoration: none;
    }
}

ul:hover {
    
}

@media ${devices.laptop} {
    margin-left: 15%;
    margin-right: 15%;
}
`

const SmallLine1 = styled.div`
position: fixed;
top: 55px;
left: 35%;
width: 10px;
height: 0;
background-color: ${gray};

animation: slideDownSmall 3s;
animation-delay: 1s;
animation-fill-mode: forwards;

@keyframes slideDownSmall {
    from {
        height: 0;
    }
    to {
        height: 45px;
    }
}
`

const SmallLine2 = styled.div`
position: fixed;
top: 55px;
right: 35%;
width: 10px;
height: 0;
background-color: ${gray};

animation: slideDownSmall 3s;
animation-delay: 1s;
animation-fill-mode: forwards;
`

const SmallLine3 = styled.div`
position: fixed;
top: 55px;
left: 50%;
width: 10px;
height: 0;
background-color: ${gray};

animation: slideDownSmall 3s;
animation-delay: 1s;
animation-fill-mode: forwards;
`

const Navbar = () => {
    //Set the color of navbar items when navigate to different pages
    const [homeColor, setHomeColor] = React.useState(blue);
    const [aboutColor, setAboutColor] = React.useState(blue);
    const [projectsColor, setProjectsColor] = React.useState(blue);
    const [contactColor, setContactColor] = React.useState(blue);
    
    React.useEffect(() => {
        if(window.location.pathname === "/") {
            setHomeColor(gold)
        }
        else if(window.location.pathname === "/About") {
            setAboutColor(gold)
        }
        else if(window.location.pathname === "/Projects") {
            setProjectsColor(gold)
        }
        else if(window.location.pathname === "/Contact") {
            setContactColor(gold)
        }
    })

    //Hide the 3 small lines while scrolling
    const [isVisible, setIsVisible] = React.useState(true);
    
    React.useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])
    const listenToScroll = () => {
        let heighToHideBars = 5;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
       
        if(winScroll > heighToHideBars) {
            isVisible && setIsVisible(false);
        }
        else {
            setIsVisible(true);
        }
    };

    return (
        <Contain>
            <ul>
                <li className='fas fa-home' style={{ color: homeColor}}></li>
                <a href='/' style={{ color: homeColor}}>Home</a>
            </ul>
            <ul>
                <li className='fas fa-info' style={{ color: aboutColor}}></li>
                <a href='/About' style={{ color: aboutColor}}>About</a>
            </ul>
            <ul>
                <li className='fas fa-project-diagram' style={{ color: projectsColor}}></li>
                <a href='/Projects' style={{ color: projectsColor}}>Projects</a>
            </ul>
            <ul>
                <li className='fab fa-connectdevelop' style={{ color: contactColor}}></li>
                <a href='/Contact' style={{ color: contactColor}}>Contact</a>
            </ul>
            {
                isVisible
                &&
                <SmallLine1></SmallLine1>
            }
            {
                isVisible
                &&
                <SmallLine2></SmallLine2>
            }
            {
                isVisible
                &&
                <SmallLine3></SmallLine3>
            }
        </Contain>
    )
}

export default Navbar