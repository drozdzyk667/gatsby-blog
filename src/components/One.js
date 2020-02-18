import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ReactCompareImage from 'react-compare-image'
import Austria from '../images/europa/austria.jpg'
import Bułgaria from '../images/europa/bułgaria.jpg'
import InstagramEmbed from 'react-instagram-embed'
import ParticlesBg from 'particles-bg'
import Icon from './heart_icon'

const config = {
  num: [2, 4],
  rps: 0.9,
  radius: [30, 70],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.6, 0],
  scale: [0.4, 0.9],
  body: Icon,
  position: 'all',
  cross: 'dead',
  random: 10,
}
const One = () => {
  return (
    <section id="one" className="spotlight compare-container">
      <div className={'compare-inner'}>
        <div className="compare-img">
          <div className="compare-img-container">
            <ReactCompareImage leftImage={Austria} rightImage={Bułgaria} />
          </div>
          <div className="compare-img-text">
            <h4>Hello World</h4>
            <p>
              Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor
              enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep.
            </p>
          </div>
        </div>

        <InstagramEmbed
          url="https://www.instagram.com/p/B8mIeKLHK2G/"
          maxWidth={320}
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
      <ParticlesBg type="custom" config={config} bg={true} />
    </section>
  )
}
export default One
