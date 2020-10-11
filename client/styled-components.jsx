import React from 'react';
import styled, { keyframes } from 'styled-components';


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
  display: flex !important;
  margin-top: 10%
`;

export const ImageCarouselContainer = styled.div`
  position: relative !important;
  flex-grow: 6 !important;
  flex-shrink: 1 !important;
  flex-basis: 0% !important;
`;

export const CarouselPaneList = styled.ul`
  padding-left: 0;
  overflow: hidden !important;
  position: relative !important;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const CarouselPane = styled.li`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  animation: 600ms ${FadeIn} ease-in;

  .carousel-image {
    max-height: 100%;
    transform: translateY(-50%) !important;
    position: relative !important;
    top: 50% !important;
  }
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
`;

export const ModalStyling = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  transition: opacity .15s linear;
`;
