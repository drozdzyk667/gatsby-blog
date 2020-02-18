import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Carousel_1 from '../images/carousel_1.jpg'
import Carousel_2 from '../images/carousel_2.jpg'
import Carousel_3 from '../images/carousel_3.jpg'

const Articles = () => {
  return (
    <section id="articles" className="spotlight">
      <div class="card-header">
        <h1>Najnowsze Artykuły</h1>
      </div>

      <div class="card-container">
        <div class="article">
          <img src={Carousel_1} alt="article_1" />
          <div class="article-content">
            <h5>Austria</h5>
            <p>
              Moja przygoda z podróżowaniem rozpoczęła się gdy miałam 4 lata.
            </p>
          </div>
        </div>
        <div class="article">
          <img src={Carousel_2} alt="article_2" />
          <div class="article-content">
            <h5>Bułgaria</h5>
            <p>
              Moja przygoda z podróżowaniem rozpoczęła się gdy miałam 4 lata.
            </p>
          </div>
        </div>
        <div class="article">
          <img src={Carousel_3} alt="article_3" />
          <div class="article-content">
            <h5>Chorwacja</h5>
            <p>
              Moja przygoda z podróżowaniem rozpoczęła się gdy miałam 4 lata.
            </p>
          </div>
        </div>
      </div>
      <ScrollLink
        to="two"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
      >
        Next
      </ScrollLink>
    </section>
  )
}

export default Articles
