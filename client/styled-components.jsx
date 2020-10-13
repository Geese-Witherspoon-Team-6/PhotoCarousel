import React from 'react';
import styled, { keyframes } from 'styled-components';


export const GalleryButton = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: 0px 2px 10px;
  border-radius: 24px;
  #next-button {
    transform: rotate(180deg);
  }

  &.left-button {
    order: 1;
  }
  &.right-button {
    order: 3;
  }

`
export const HeartButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 24px;
  padding: 0;
  background: transparent;
  box-shadow: 0px 2px 10px;
  right: 0;
  position: relative;
  left: 96%;
`

export const ServiceContainer = styled.div`
  display: block;
  position: relative;

  &.modal-open {
    overflow: hidden;
  }
`;

export const CarouselContainer = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10%
`;

export const ImageCarouselContainer = styled.div`
  position: relative;
  flex-grow: 6;
  flex-shrink: 1;
  flex-basis: 0%;
`;

export const CarouselPaneList = styled.div`
  padding-left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const CarouselPane = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  margin: auto;
  order: 2;
  justify-content: center;
  animation: 600ms ${FadeIn} ease-in;

  .carousel-image {
    max-height: 100%;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
  }

  .carousel-image:hover {
    cursor: url(https://www.etsy.com/assets/dist/images/listzilla/expand-icon.20200413213051.svg), auto;
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
