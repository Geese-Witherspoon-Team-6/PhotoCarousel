// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import PhotoCarousel from './PhotoCarousel.jsx';
import PhotoModal from './PhotoModal.jsx';
import './dist/stylesheet.css';


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
    axios.get('/api/carousel')
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
          <PhotoCarousel products={this.state.productData} handleShowModal={this.handleShowModal}/>
          <PhotoModal show={this.state.show} handleCloseModal={this.handleCloseModal} products={this.state.productData}/>
          <Button className="button" onClick={this.log}>Test</Button>
          <img className="carousel-arrow" src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22 aria-hidden%3D%22true%22 focusable%3D%22false%22%3E%3Cpath fill%3D%22%23222222%22 d%3D%22M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"/>
        </div>
      );
    }
  }
}


ReactDOM.render(<App />, document.getElementById('photoCarousel'));
