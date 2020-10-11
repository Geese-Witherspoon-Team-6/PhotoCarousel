import React, { useState } from 'react';
import { CarouselPaneList } from './styled-components.jsx'
import { CarouselPane } from './styled-components.jsx'


const PhotoCarousel = (props) => {
  const [index, setIndex] = useState(0);
  console.log(props.products[0])
  const handleSelect = (selectedIndex, e) => {
    console.log('selectedIndex: ', selectedIndex);
    setIndex(selectedIndex);
    console.log('index: ', index);
  }

  return (
    <div>
      <CarouselPaneList>
        <CarouselPane>
          <img className="carousel-image" src={props.products[0].photos[index]} onClick={props.handleShowModal}/>
        </CarouselPane>
      </CarouselPaneList>
    </div>
  )

}

      // <img className="carousel-image" src={props.products[0].photos[index]} onClick={props.handleShowModal}/>
// <a href="https://imgur.com/ONkjUbB"><img src="https://i.imgur.com/ONkjUbB.png" title="source: imgur.com" /></a>

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