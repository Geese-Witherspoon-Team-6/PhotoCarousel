
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoCarousel from './PhotoCarousel.jsx';
import PhotoModal from './PhotoModal.jsx';
import './dist/stylesheet.css';
import { HeartButton } from './styled-components.jsx'
import { ServiceContainer } from './styled-components.jsx'
import { CarouselContainer } from './styled-components.jsx'
import { ModalShow } from './styled-components.jsx'
import { ImageCarouselContainer } from './styled-components.jsx'
var instance = axios.create({ baseURL: 'http://localhost:3000' });

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      show: false,
      productData: []
    }
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    instance.get('/api/carousel')
      .then((response) => {
        console.log(response);
        let data = response.data.sort((a, b) => {
          return a.productId - b.productId;
        })
        this.setState({
          isLoaded: true,
          productData: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  log() {
    console.log('it Worked');
  }

  handleShowModal() {
    console.log('ModalShowing: ', this.state.show);
    this.setState({
      show: true
    });
  }

  handleCloseModal() {
    this.setState({
      show: false
    })
  }


  render() {
    console.log('this is your data: ', this.state.productData);
    if (!this.state.isLoaded) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          <ServiceContainer className={this.state.show ? "modal-open" : ""}>
            <HeartButton>
              <img id="love-button" src="https://i.imgur.com/Q5diR0M.png"/>
            </HeartButton>
            <CarouselContainer>
              <ImageCarouselContainer>
                <PhotoCarousel products={this.state.productData} handleShowModal={this.handleShowModal}/>
              </ImageCarouselContainer>
            </CarouselContainer>
            {this.state.show ? <ModalShow></ModalShow> : <div></div>}
          </ServiceContainer>
        </div>
            );
          }
        }
      }

      // <PhotoModal show={this.state.show} handleCloseModal={this.handleCloseModal} products={this.state.productData}/>

ReactDOM.render(<App />, document.getElementById('photoCarousel'));
