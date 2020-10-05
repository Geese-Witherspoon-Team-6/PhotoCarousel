import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const PhotoCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log('selectedIndex: ', selectedIndex);
    setIndex(selectedIndex);
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={props.products[0].photos[0]} />
        <Carousel.Caption>
          <h2>{props.products[0].name}</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.products[0].photos[1]} />
        <Carousel.Caption>
          <h2>{props.products[0].name}</h2>
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