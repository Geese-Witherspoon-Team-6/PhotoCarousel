import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      index: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.products[0].name}</h2>
        <img src={this.state.products[0].photos[0]}/>
      </div>
    );
  }
}

export default PhotoCarousel;