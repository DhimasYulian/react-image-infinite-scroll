import React from 'react'
import styled from 'styled-components'

const Heading = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;
`;

const H1 = styled.h1`
    margin-bottom: 0.5em;
`;


const Header = () => {
    return (
        <>
            <Heading>
                <H1>React Image Infinite Scroll</H1>
                <p>Image Gallery using Unsplash API</p>
            </Heading>
            <hr />
        </>
    )
}

export default Header
