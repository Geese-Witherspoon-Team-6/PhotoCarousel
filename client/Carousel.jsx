import React from 'react';

const Carousel = (props) => {
  return (
    <div>
      <h2>{props.products[0].name}</h2>
      <img src={props.products[0].photos[0]}/>
    </div>
  );
}

export default Carousel;