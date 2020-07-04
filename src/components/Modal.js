import React from 'react'
import styled from 'styled-components';

const ModalComp = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Caption = styled.p`
    color: #fff;
    font-size: 2rem;
    position: absoute;
    left: 50%;
    transform: translate(-50%, -5%)
`;

const ModalImg = styled.img`
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`;

const Modal = ({ fullImg, caption }) => {
    return (
        <ModalComp>
            <ModalImg src={fullImg} alt={caption} />
            <Caption>{caption}</Caption>
        </ModalComp>
    )
}

export default Modal
