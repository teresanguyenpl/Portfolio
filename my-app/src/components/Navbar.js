import React from 'react'
import styled from 'styled-components'
import { gold, blue, gray } from "./Styles"
import { devices } from './DeviceSize'
import { Link } from 'react-router-dom'


const Contain = styled.div`
display: flex;
flex-direction: row;
margin-top: 50px;
margin-left: 15%;
margin-right: 15%;
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
}

ul:hover {
    li {
        font-size: 21px;
    }
}

@media ${devices.laptop} {
    margin-left: 10%;
    margin-right: 10%;
    ul {
        li {
            font-size: 16px;
        }
    }
    ul:hover {
        li {
            font-size: 18px;
        }
    }
}
@media ${devices.tablet} {
    margin-left: 10%;
    margin-right: 10%;
    ul {
        li {
            font-size: 15px;
        }
    }
    ul:hover {
        li {
            font-size: 16px;
        }
    }
}
@media ${devices.mobileL} {
    margin-left: 7%;
    margin-right: 7%;
}
@media ${devices.mobileS} {
    margin-left: 3%;
    margin-right: 3%;
    ul {
        li {
            font-size: 11px;
        }
    }
    ul:hover {
        li {
            font-size: 12px;
        }
    }
}
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    @media ${devices.laptop} {
        font-size: 18px;
    }
    @media ${devices.tablet} {
        font-size: 15px;
    }
    @media ${devices.mobileM} {
        font-size: 13px;
    }
    @media ${devices.mobileS} {
        font-size: 11px;
    }
`

const SmallLine1 = styled.div`
position: fixed;
top: 55px;
left: 32%;
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

@media ${devices.laptop} {
    left: 30%;
}
@media ${devices.tablet} {
    width: 6px;
    @keyframes slideDownSmall {
        from {
            height: 0;
        }
        to {
            height: 35px;
        }
    }
}
@media ${devices.mobileL} {
    display: none;
}
`

const SmallLine2 = styled.div`
position: fixed;
top: 55px;
right: 32%;
width: 10px;
height: 0;
background-color: ${gray};

animation: slideDownSmall 3s;
animation-delay: 1s;
animation-fill-mode: forwards;

@media ${devices.laptop} {
    right: 31%;
}
@media ${devices.tablet} {
    width: 6px;
}
@media ${devices.mobileL} {
    display: none;
}
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

@media ${devices.tablet} {
    width: 6px;
}
@media ${devices.mobileL} {
    display: none;
}
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
                <LinkStyle style={{ color: homeColor}} to ="/">Home</LinkStyle>
            </ul>
            <ul>
                <li className='fas fa-info' style={{ color: aboutColor}}></li>
                <LinkStyle style={{ color: aboutColor}} to ="/About">About</LinkStyle>
            </ul>
            <ul>
                <li className='fas fa-project-diagram' style={{ color: projectsColor}}></li>
                <LinkStyle style={{ color: projectsColor}} to ="/Projects">Projects</LinkStyle>
            </ul>
            <ul>
                <li className='fab fa-connectdevelop' style={{ color: contactColor}}></li>
                <LinkStyle style={{ color: contactColor}} to ="/Contact">Contact</LinkStyle>
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