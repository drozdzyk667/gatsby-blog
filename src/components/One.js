import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ReactCompareImage from 'react-compare-image'
import LeftImg from '../images/left-compare.jpg'
import RightImg from '../images/right-compare.jpg'
import InstagramEmbed from 'react-instagram-embed'
import Fade from 'react-reveal/Fade'
import Postcard from '../images/postcard.png'
import Envelope from '../images/envelope.jpg'

const One = () => {
  return (
    <section id="one" className="spotlight compare-container">
      <div className={'compare-outter'}>
        <h1>{'POZNAJMY SIĘ'}</h1>
        <div className={'compare-inner'}>
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
            <Fade left>
              <div className="compare-img-text">
                <div className="compare-img-text-inner">
                  <h4>Hello World</h4>
                  <p>
                    Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus
                    tortor enim mi mi nisi praesent adipiscing. Integer mi sed
                    nascetur cep.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="instagram-container">
            <h5>{'Jestem na Instagramie'}</h5>
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
