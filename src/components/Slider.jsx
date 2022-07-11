import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css';

import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'

const Slider = () => {
    return (
      <Carousel>
      <div>
          <img alt= "imagen1" src={img1} />
          <p className="legend">Tour #1</p>
      </div>
      <div>
          <img alt= "imagen2" src={img2} />
          <p className="legend">Tour #2</p>
      </div>
      <div>
          <img alt= "imagen3" src={img3} />
          <p className="legend">Tour #3</p>
      </div>
  </Carousel>
    )
  }
  
export default Slider