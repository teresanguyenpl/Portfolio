import React from 'react'
import styled from 'styled-components'

import { ProjectItems } from './ProjectItem';
import ProjectStyle from './ProjectStyle';
import { devices } from './DeviceSize'

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 8rem;
padding-bottom: 8rem;
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
    padding-top: 6rem;
    padding-bottom: 6rem;
}
@media ${devices.mobileL} {
    padding-top: 5rem;
    padding-bottom: 5rem;
}
@media ${devices.mobileM} {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
}
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(2rem + 2vw);
text-align: center;

@media ${devices.laptop} {
    grid-gap: calc(1.5rem + 1.5vw);
}

@media ${devices.tablet} {
    grid-template-columns: minmax(100px, 1fr);
}
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
