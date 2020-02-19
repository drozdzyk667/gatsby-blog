import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ReactCompareImage from 'react-compare-image'
import LeftImg from '../images/left-compare.jpg'
import RightImg from '../images/right-compare.jpg'
import InstagramEmbed from 'react-instagram-embed'
import { Fade, Zoom } from 'react-reveal'
import Postcard from '../images/postcard.png'
import Envelope from '../images/envelope.jpg'
import { Button } from '@material-ui/core'
import { Link } from 'gatsby'

const One = () => {
  return (
    <section id="one" className="spotlight compare-container">
      <div className={'compare-outter'}>
        <Zoom top cascade duration={1400}>
          <h1>{'POZNAJMY SIĘ'}</h1>
        </Zoom>
        <div className={'compare-inner'}>
          <Fade left delay={1200} duration={1200}>
            <div className="compare-img">
              <div className="compare-img-container">
                <img className="postcard-container" src={Postcard} />
                <img className="envelope-container" src={Envelope} />
                <ReactCompareImage
                  aspectRatio={'wider'}
                  leftImage={LeftImg}
                  rightImage={RightImg}
                />
              </div>
              <Fade bottom delay={1500}>
                <div className="compare-img-text">
                  <div className="compare-img-text-inner">
                    <h3>Cześć !</h3>
                    <p>
                      {'Mam na imię Kasia i zapraszam na mój blog podróżniczy.'.toUpperCase()}
                    </p>
                    <Link to={'/omnie'}>
                      <Button color="secondary" variant="contained">
                        {'O MNIE'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade right delay={2000} duration={1500}>
            <div className="instagram-container">
              <Zoom top cascade delay={2200}>
                <h5>{'Jestem na Instagramie'}</h5>
              </Zoom>
              <div className="insta">
                <InstagramEmbed
                  url="https://www.instagram.com/p/B8mIeKLHK2G/"
                  maxWidth={500}
                  hideCaption={true}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <ScrollLink
        to="articles"
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
export default One
