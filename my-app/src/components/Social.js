import React from 'react'
import styled from 'styled-components'
import { gold } from "./Styles";

const Icons = styled.div`
position: fixed;
display: flex;
flex-direction: column;
bottom: 0;
left: 4rem;
align-items: center;
a {
    text-decoration: none;
    color: ${gold};
    padding: 0 0 15px 0;
}

opacity: 0;
animation: fadeIn 3s;
animation-fill-mode: forwards;
`

const StraightLine = styled.span`
width: 1px;
height: 0;
background-color: ${gold};

animation: slideUp 3s;
animation-delay: 2s;
animation-fill-mode: forwards;

@keyframes slideUp {
    from {
        height: 0;
    }
    to {
        height: 8rem;
    }
}
`

const Social = () => {
    return (
        <Icons>
            <div>
                <a href='https://github.com/teresanguyenpl' target="_blank" className='fab fa-github fa-lg'> </a>
            </div>
            <div>
                <a href='#' target="_blank" className='fab fa-linkedin-in fa-lg'> </a>
            </div>
            <StraightLine />
        </Icons>
    )
}

export default Social
