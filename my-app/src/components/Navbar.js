import React from 'react'
import styled from 'styled-components'
import { gold, blue } from "./Styles";


const Contain = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
margin-top: 50px;
margin-left: 20%;
margin-right: 20%;
border-bottom: 0.01em solid ${gold};
border-top: 5px solid ${gold};
border-right: 1px solid ${gold};
border-left: 1px solid ${gold};
ul {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    padding: 5px 10px;
    li {
        color: ${blue};
    }
    a {
        color: ${blue};
        text-decoration: none;
    }
}

ul:hover {
    
}
`;

const Navbar = () => {
    return (
        <Contain>
            <ul>
                <li className='fas fa-home'></li>
                <a href='/'>Home</a>
            </ul>
            <ul>
                <li className='fas fa-info'></li>
                <a href='/About'>About</a>
            </ul>
            <ul>
                <li className='fas fa-project-diagram'></li>
                <a href='/Projects'>Projects</a>
            </ul>
            <ul>
                <li className='fab fa-connectdevelop'></li>
                <a href='/Contact'>Contact</a>
            </ul>
        </Contain>
    )
}

export default Navbar