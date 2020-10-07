import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PhotoCarousel from './PhotoCarousel.jsx';

const PhotoModal = (props) => {

  return (
    <div>
      <Modal show={props.show} onHide={props.handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="carousel-modal-body">
            <PhotoCarousel id="carousel-modal" products={props.products}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

}

export default PhotoModal;