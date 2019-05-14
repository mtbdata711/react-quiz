/*
 * ============= Question 6 =============
 *
 * Complete the ImageGallery component so that it fetches an image URL from:
 * https://auspicious-baritone.glitch.me/gorilla.
 *
 * The request will take at least 2 seconds to return so make sure you show
 * something helpful to the user.
 */

import React, { Component } from "react";

class ImageGallery extends Component {
  state = {
    imgSrc: null,
    isLoading: true
  };

componentDidMount() {
  fetch('https://auspicious-baritone.glitch.me/gorilla').then(res => res.json()).then(data => this.setState({
    imgSrc: data,
    isLoading: false
  }))
}

loadingAnimal = () =>{
  return <p>Loading animal</p>
}

  render() {
    return(
      <div>
      { (this.state.isLoading) ? this.loadingAnimal() : <img src={this.state.imgSrc} alt="An animal" /> }
    </div>
  )
  }
}

export default ImageGallery;
