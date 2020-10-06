import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const PhotoCarousel = (props) => {
  const [index, setIndex] = useState(0);
  console.log(props.products[0])
  const handleSelect = (selectedIndex, e) => {
    console.log('selectedIndex: ', selectedIndex);
    setIndex(selectedIndex);
    console.log('index: ', index);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false}>
      <Carousel.Item>
        <img className="carousel-image" src={props.products[0].photos[index]} onClick={props.handleShowModal}/>
        <Carousel.Caption>
          <h2 className="carousel-title">{props.products[0].name}</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={props.products[0].photos[index]} onClick={props.handleShowModal}/>
        <Carousel.Caption>
          <h2 className="carousel-title">{props.products[0].name}</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

}


  // return (
  //   <div>
  //   <h2>{props.products[0].name}</h2>
  //   <img src={props.products[0].photos[0]}/>
  //  </div>
  // );


    // <div>
    //   <h2>{props.products[0].name}</h2>
    //   <img src={props.products[0].photos[0]}/>
    // </div>




export default PhotoCarousel;