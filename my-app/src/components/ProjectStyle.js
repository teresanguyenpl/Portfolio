import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { gold, blue, gray } from "./Styles";

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
`

const Used = styled.h5`
padding-top: 0.1rem;
`


const Date = styled.h6`
padding-top: 0.1rem;
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
