import React from 'react'
import styled from 'styled-components'
import { gold, blue } from "./Styles";
import { devices } from './DeviceSize'

const Container = styled.div`
position: absolute;
text-align: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const Info = styled.div`
h1 {
    font-size: 64px;
    color: ${gold};
    font-weight: 100;
}

h3 {
    font-size: 34px;
    color: ${blue};
    font-weight: 100;
}

a {
    text-decoration: none;
    color: ${blue};
}

h3:hover {
    font-size: 36px;
}

@media ${devices.tablet} {
    h1{
        font-size: 52px;
    }
    h3 {
        font-size: 28px;
    }
    h3:hover {
        font-size: 30px;
    }
}
@media ${devices.mobileM} {
    h1 {
        font-size: 42px;
    }
    h3 {
        font-size: 20px;
    }
    h3:hover {
        font-size: 22px;
    }
}
@media ${devices.mobileS} {
    h1 {
        font-size: 36px;
    }
    h3 {
        font-size: 17px;
    }
    h3:hover {
        font-size: 19px;
    }
}
`

const Copyright = styled.div`
position: fixed;
width: 100%;
font-size: 17px;
bottom: 0;
h4 {
    text-align: center;
    color: ${gold};
    font-weight: 100;
}
@media ${devices.mobileM} {
    font-size: 15px;
}
@media ${devices.mobileM} {
    font-size: 13px;
}
`
const ContactInfo = () => {
    return (
        <div>
        <Container>
            <Info>
                <h1>Get In Touch</h1>
                <h3><i class="fas fa-envelope"></i><a href="mailto: teresanguyenpl@gmail.com"> teresanguyenpl@gmail.com</a></h3>
            </Info>
        </Container>
        <Copyright>
            <h4>Copyright <i class="fas fa-copyright"></i> Teresa Nguyen</h4>
        </Copyright>
        </div>
    )
}

export default ContactInfo
