import React from 'react'
import { gold, blue, gray } from "./Styles";
import { useState } from 'react'
import { renderMatches } from 'react-router'
import Slider from 'react-slick'
import styled from 'styled-components'
import Cleverchat from '../assets/Images/Cleverchat.jpg'
import TheForm from '../assets/Images/Form.jpg'
import Shopfies from '../assets/Images/Shopfies.jpg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const images = [Cleverchat, TheForm, Shopfies]

const Container = styled.div`
    width: 50%;
    margin: 7rem auto;
    .slide {
        transform: scale(0.2);
        transition: transform 300ms;
        opacity: 0.5;
        img {
            width: 20rem;
            margin: 0 auto;
        }
    }
    .activeSlide {
        transform: scale(1.1);
        opacity: 1;
    }
    .arrow {
        background-color: ${gold};
        position: absolute;
        cursor: pointer;
        z-index: 10;

    }
`

function Project() {
    const iconStyle = { color: gold, size: '50px' }
    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow' onClick={onClick}>
                <FaArrowRight style={iconStyle}/>
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow' onClick={onClick}>
                <FaArrowLeft style={iconStyle}/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] =  useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };
    return (
        <Container>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img}/>
                    </div>
                ))}
            </Slider>
        </Container>
    )
}

export default Project
