// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      productData: []
    }
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

  render() {
    console.log('this is your data: ', this.state.productData);
    if (!this.state.isLoaded) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          <Carousel products={this.state.productData}/>
          <Button onClick={this.log}>Test</Button>
        </div>
      );
    }
  }
}


ReactDOM.render(<App />, document.getElementById('photoCarousel'));
