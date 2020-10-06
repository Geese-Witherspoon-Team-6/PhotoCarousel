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

  handleShowModal(showModalFunc) {
    console.log('ModalShowing: ', this.state.show);
    this.setState({
      show: true
    });
  }


  render() {
    console.log('this is your data: ', this.state.productData);
    if (!this.state.isLoaded) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          <PhotoCarousel products={this.state.productData} handleShowModal={this.handleShowModal}/>
          <PhotoModal show={this.state.show}/>
          <Button className="button" onClick={this.log}>Test</Button>
        </div>
      );
    }
  }
}


ReactDOM.render(<App />, document.getElementById('photoCarousel'));
