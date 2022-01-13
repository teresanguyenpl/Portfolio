import React from 'react'
import { gold, blue, gray } from "./Styles";
import { useState } from 'react'
import { renderMatches } from 'react-router'
import Slider from 'react-slick'
import styled from 'styled-components'

import { ProjectItems } from './ProjectItem';
import ProjectStyle from './ProjectStyle';

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 8rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(2rem + 2vw);
text-align: center;
`



const Project = () => {
    return (
        <Center>
        <Grid>
        {
            ProjectItems.map(project => {
                return <ProjectStyle key={project.id} project={project} />
            })
        }
        </Grid>
        </Center>
    )
}

export default Project
