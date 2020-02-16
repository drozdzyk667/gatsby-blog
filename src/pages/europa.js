import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../assets/scss/europa.scss'
import { Link } from 'gatsby'
import Austria from '../images/europa/austria.jpg'
import Bułgaria from '../images/europa/bułgaria.jpg'
import Chorwacja from '../images/europa/chorwacja.jpg'
import Francja from '../images/europa/paryz.jpg'
import Czechy from '../images/europa/czechy.jpg'
import Niemcy from '../images/europa/berlin.jpg'
import Grecja from '../images/europa/grecja.jpg'
import Hiszpania from '../images/europa/barcelona.jpg'
import Holandia from '../images/europa/amsterdam.jpg'
import Portugalia from '../images/europa/portugalia.jpg'
import Rumunia from '../images/europa/rumunia.jpg'
import Szwecja from '../images/europa/szwecja.jpg'
import Anglia from '../images/europa/londyn.jpg'
import Włochy from '../images/europa/wlochy.jpg'
import Dania from '../images/europa/dania.jpg'
import Norwegia from '../images/europa/norwegia.jpg'

const countriesData = [
  {
    countries: [
      {
        title: 'Austria',
        url: Austria,
      },
      {
        title: 'Bułgaria',
        url: Bułgaria,
      },
      {
        title: 'Chorwacja',
        url: Chorwacja,
      },
    ],
  },
  {
    countries: [
      {
        title: 'Francja',
        url: Francja,
      },
      {
        title: 'Czechy',
        url: Czechy,
      },
      {
        title: 'Niemcy',
        url: Niemcy,
      },
    ],
  },
  {
    countries: [
      {
        title: 'Grecja',
        url: Grecja,
      },
      {
        title: 'Hiszpania',
        url: Hiszpania,
      },
      {
        title: 'Holandia',
        url: Holandia,
      },
    ],
  },
  {
    countries: [
      {
        title: 'Portugalia',
        url: Portugalia,
      },
      {
        title: 'Rumunia',
        url: Rumunia,
      },
      {
        title: 'Szwecja',
        url: Szwecja,
      },
    ],
  },
  {
    countries: [
      {
        title: 'Anglia',
        url: Anglia,
      },
      {
        title: 'Włochy',
        url: Włochy,
      },
    ],
  },
]

const Styles = () => ({
  rotate: {
    transform: `rotate(${Math.floor(
      Math.random() * 20 - 10
    )}deg) translateY(${Math.floor(Math.random() * 40 - 20)}px)`,
  },
  text: {
    color: 'black',
    paddingTop: '10px',
    fontFamily: 'Quattrocento',
  },
  textDisabled: {
    fontSize: '0.8em',
    color: 'black',
    paddingTop: '10px',
  },
})

const RotateContainer = () => {
  return (
    <div>
      {countriesData.map((item, index) => (
        <div key={index} className={'row-container'}>
          {item.countries.map((country, index) => (
            <Link key={index} to={`/europa/${country.title.toLowerCase()}`}>
              <div style={Styles().rotate} className={'singleContainer'}>
                <img src={country.url} alt={country.title} />
                <h4 style={Styles().text}>{country.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

const LeftSidebar = () => {
  return (
    <Layout>
      <Helmet>
        <title>Podróże Przez Europe</title>
        <meta name="description" content="Right Sidebar Page" />
      </Helmet>

      <div id="background-image"></div>
      <div id="wrapper-europe">
        <div id="title-wrapper">
          <span>
            <h2>Podróże</h2>
            <h2>przez</h2>
            <h1>Europe</h1>
          </span>
        </div>

        <div id="content-wrapper">
          <RotateContainer />

          <div className="row-container">
            <div className="singleContainer-disabled">
              <img className="in-progress" src={Dania} alt="Dania" />
              <h4 style={Styles().textDisabled}>Dania in progress...</h4>
            </div>
            <div className="singleContainer-disabled">
              <img className="in-progress" src={Norwegia} alt="Norwegia" />
              <h4 style={Styles().textDisabled}>Norwegia in progress...</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LeftSidebar
