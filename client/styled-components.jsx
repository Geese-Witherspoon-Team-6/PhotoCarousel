import React from 'react';
import styled from 'styled-components';


const GalleryButton = styled.div`

`
export const HeartButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 24px;
  right: 0 !important;
  position: relative !important;
  left: 96%;
`

export const ServiceContainer = styled.div`
  display: block;
  position: relative !important;

  &.modal-open {
    overflow: hidden;
  }
`;

export const CarouselContainer = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10%
`;

export const ModalShow = styled.div`
  opacity: .5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  transition: opacity .15s linear;
`

export const ModalStyling = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  transition: opacity .15s linear;
`
