import React from 'react';
import { CarouselPaneList } from './styled-components.jsx'
import { CarouselPane } from './styled-components.jsx'
import { GalleryButton } from './styled-components.jsx'


class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      index: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleShowModal = props.handleShowModal;
  }


  handleSelect(button) {
    if (button === 'next') {
      console.log(this.state.index++)

      this.setState({
        index: this.state.index++
      })
    } else {
      console.log(this.state.index--)
      this.setState({
        index: this.state.index--
      })
    }

  }

  render() {
    console.log(this.state.products[0])
    console.log(this.state.index)
    return (
      <div>
        <CarouselPaneList className="parent-container">
          <CarouselPane className="flex-container">
            <img className="carousel-image" src={this.state.products[0].photos[this.state.index]} onClick={this.handleShowModal}/>
          </CarouselPane>
          <GalleryButton className="left-button" onClick={() => this.handleSelect('prev')}>
            <img id="prev-button" src="https://i.imgur.com/ONkjUbB.png"/>
          </GalleryButton>
          <GalleryButton className="right-button" onClick={() => this.handleSelect('next')}>
            <img id="next-button" src="https://i.imgur.com/ONkjUbB.png"/>
          </GalleryButton>
        </CarouselPaneList>
      </div>
    );

  }

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