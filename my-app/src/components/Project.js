import React from 'react'
import { useState } from 'react'
import { renderMatches } from 'react-router'
import Slider from 'react-slick'
import styled from 'styled-components'
import Cleverchat from '../assets/Images/Cleverchat.jpg'
import TheForm from '../assets/Images/Form.jpg'
import Shopfies from '../assets/Images/Shopfies.jpg'

const images = [Cleverchat, TheForm, Shopfies]

const Container = styled.div`
    position: relative;
    width: 50%;
    margin: 10rem auto;
`

const Slide = styled.div`

`


function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: 0
    };
    return (
        <Container>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <Slide>
                        <img src={img} alt={img} />
                    </Slide>
                ))}
            </Slider>
        </Container>
    )
}

export default Project
