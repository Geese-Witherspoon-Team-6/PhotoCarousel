import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

  render() {
    console.log('this is your data: ', this.state.productData);
    if (!this.state.isLoaded) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          <h2>{this.state.productData[0].name}</h2>
          <img src={this.state.productData[0].photos[0]}/>
        </div>
      );
    }
  }
}


ReactDOM.render(<App />, document.getElementById('photoCarousel'));
