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

const Wrapper = styled.div`
`

const Card = styled.div`

`

const Image = styled.div`
`

const SocialIcon = styled.div`
`

const Describe = styled.div`

`

const More = styled.div`
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
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };
    return (
        <Slider {...settings}>
            <Wrapper>
                <Card>
                    <Image>
                        <img src={Cleverchat}></img>
                    </Image>
                    <SocialIcon>
                        <a href='https://github.com/teresanguyenpl' target="_blank" className='fab fa-github fa-lg'> </a>
                    </SocialIcon>
                    <Describe>
                        <h2>Title <span>Used: </span></h2>
                    </Describe>
                    <More>
                        <button>Learn More</button>
                    </More>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <Image>
                        <img src={TheForm}></img>
                    </Image>
                    <SocialIcon>
                        <a href='https://github.com/teresanguyenpl' target="_blank" className='fab fa-github fa-lg'> </a>
                    </SocialIcon>
                    <Describe>
                        <h2>Title <span>Used: </span></h2>
                    </Describe>
                    <More>
                        <button>Learn More</button>
                    </More>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <Image>
                        <img src={Shopfies}></img>
                    </Image>
                    <SocialIcon>
                        <a href='https://github.com/teresanguyenpl' target="_blank" className='fab fa-github fa-lg'> </a>
                    </SocialIcon>
                    <Describe>
                        <h2>Title <span>Used: </span></h2>
                    </Describe>
                    <More>
                        <button>Learn More</button>
                    </More>
                </Card>
            </Wrapper>
        </Slider>
    )
}

export default Project
