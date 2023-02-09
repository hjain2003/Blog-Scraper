import React from 'react'
import Card from '../Card/Card'
import '../Card/Card.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const Explore = () => {
  return (
    <div id="latest_wrapper">
      <h1 align="center">LATEST BLOGS</h1>
      <h2 align="center">Get your latest blogs here</h2>
      <br /><br />
      <div id="card_slider_wrapper">
        <CarouselProvider className='carousel'
          naturalSlideWidth={1000}
          naturalSlideHeight={1025}
          totalSlides={4}
          visibleSlides={3}
          currentSlide={0}
          interval={5000}
        >

          <Slider>
            <Slide index={0}><Card/></Slide>
            <Slide index={1}><Card/></Slide>
            <Slide index={2}><Card /></Slide>
            <Slide index={3}><Card/></Slide>
          </Slider>
            <br />
          <div id="next_prev_btn">
            <ButtonBack id="prev_btn"><FcPrevious size={25}/></ButtonBack> &nbsp;&nbsp;&nbsp;
            <ButtonNext id="next_btn"><FcNext size={25}/></ButtonNext>
          </div>
        </CarouselProvider>
        {/* <Card /> */}
      </div>
    </div>
  )
}

export default Explore
