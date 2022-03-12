import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { gold, gray } from "./Styles";
import { devices } from './DeviceSize'

const Contain = styled(NavLink)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: white;
border: 2px solid white;
box-shadow: 0 0 1rem 0 black;

:hover {
    box-shadow: 0 0 1rem 0 gold;
    h5 {
        color: white;
    }
    h3 {
        text-shadow: 0 0 10px #fff;
    }
}
@media ${devices.laptop} {
    width: calc(8.5rem + 15vw);
    height: 17rem;
}
@media ${devices.tablet} {
    width: calc(13rem + 16vw);
    height: 20rem;
}
@media ${devices.mobileL} {
    width: calc(11rem + 15vw);
    height: 17rem;
}
@media ${devices.mobileM} {
    width: calc(8.5rem + 15vw);
    height: 14rem;
}
@media ${devices.mobileS} {
    width: calc(7em + 15vw);
    height: 12.5rem;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 55%;
background-size: cover;
background-position: center center;
`

const Title = styled.h3 `
color: inherit;
padding-top: 0.3rem;
font-weight: 100;
text-align: center;
color: ${gold};

@media ${devices.laptop} {
    font-size: 15px;
}
@media ${devices.mobileM} {
    font-size: 13px;
}
@media ${devices.mobileS} {
    font-size: 11px;
}
`

const Used = styled.h5`
padding-top: 0.1rem;
color: ${gray};
font-weight: 100;

@media ${devices.laptop} {
    font-size: 12px;
}

@media ${devices.tablet} {
    font-size: 12px;
}
@media ${devices.mobileM} {
    font-size: 10px;
}
@media ${devices.mobileS} {
    font-size: 8.5px;
}
`


const Date = styled.h5`
padding-top: 0.1rem;
color: ${gray};
font-weight: 100;

@media ${devices.mobileM} {
    font-size: 10px;
}
@media ${devices.mobileS} {
    font-size: 8.5px;
}
`

const ProjectItems = (props) => {
    const {name, used, date, img, link} = props.project;
    return (
        <Contain target="_blank" to={{pathname: link}}>
            <Image img={img} />
            <Title>{name}</Title>
            <Used>{used}</Used>
            <Date>{date}</Date>
        </Contain>
    )
}

export default ProjectItems
