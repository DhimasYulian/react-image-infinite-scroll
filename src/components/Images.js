import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
    &:hover{
        object-fit: cover;
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Images = ({ url }) => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Img src={url} />
        </div>
    )
}

export default Images
