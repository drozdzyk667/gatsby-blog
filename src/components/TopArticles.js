import React from 'react'
import xxx from '../images/europa/wlochy.jpg'
import Fade from 'react-reveal/Fade'

const TopArticles = () => {
  return (
    <Fade bottom>
      <section id="TopArticles">
        <div className="top-first">
          <img src={xxx} alt="first" />
          <p>{'dwefweqdqwedwqedweqdweqdweqdweqdwqedwq'}</p>
        </div>
        <div className="top-second">
          <img src={xxx} alt="first" />
          <p>{'dwefweqdqwedwqedweqdweqdweqdweqdwqedwq'}</p>
        </div>
      </section>
    </Fade>
  )
}

export default TopArticles
