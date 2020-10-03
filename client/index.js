import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      productData: [{ "_id" : "5f736e7a8e2fdd900863194c", "photos" : [ "http://placeimg.com/640/480", "http://placeimg.com/640/480", "http://placeimg.com/640/480", "http://placeimg.com/640/480", "http://placeimg.com/640/480" ], "name" : "Practical Metal Tuna", "createdAt" : "2020-09-29T17:27:22.671Z", "updatedAt" : "2020-09-29T17:27:22.671Z", "__v" : 0 }]
    }
  }

  componentDidMount() {
    axios.get('/api/carousel')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.productData[0].name}</h2>
        <img src={this.state.productData[0].photos[0]}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('photoCarousel'));
