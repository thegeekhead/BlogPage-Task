import './App.css';
import Header from './components/sections/Header';
import React, { Component } from 'react';
import Post from './components/sections/Post';
import Newsletter from './components/sections/Newsletter';
import Recommended from './components/sections/Recommended';
// import image from './components/assets/cover-nodejs-backend.jpg'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          text="hello"
        // image={image}
        />
        <Post/>
        <Newsletter/>
        <Recommended/>
      </div>

    )
  }
}

export default App;
