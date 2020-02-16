import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link as ScrollLink } from 'react-scroll'
import Carousel_1 from '../images/carousel_1.jpg'
import Carousel_2 from '../images/carousel_2.jpg'
import Carousel_3 from '../images/carousel_3.jpg'

const Banner = () => {
  return (
    <section id="banner">
      <div className="content">
        <Carousel
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          transitionTime={1000}
          infiniteLoop
          autoPlay
        >
          <div className="carousel">
            <img src={Carousel_1} />
            <p className="legend">Legend 1</p>
          </div>
          <div className="carousel">
            <img src={Carousel_2} />
            <p className="legend">Legend 2</p>
          </div>
          <div className="carousel">
            <img src={Carousel_3} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <ScrollLink
        to="one"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
      >
        {'Next'}
      </ScrollLink>
    </section>
  )
}

export default Banner
