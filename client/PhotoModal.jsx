import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PhotoCarousel from './PhotoCarousel.jsx';

const PhotoModal = (props) => {

  return (
    <div>
      <Modal show={props.show} onHide={props.handleCloseModal} size="lg" centered>
        <Modal.Body>
          <img id="modal-close-button" onClick={props.handleCloseModal} src="https://i.imgur.com/6cD8jdm.png" />
          <div id="carousel-modal-body">
            <PhotoCarousel id="carousel-modal" products={props.products}/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );

}

export default PhotoModal;