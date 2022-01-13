import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Contain = styled(NavLink)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
background-position: center center;

`

const ProjectItems = (props) => {
    const {name, used, date, img, link} = props.project;
    return (
        <Contain target="_blank" to={{pathname: link}}>
            <Image img={img} />
        </Contain>
    )
}

export default ProjectItems
