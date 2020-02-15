import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../assets/scss/europa.scss'
import Austria from '../images/europa/Austria_thumbnail.jpg'
import Bułgaria from '../images/europa/bułgaria.jpg'
import Chorwacja from '../images/europa/chorwacja.jpg'
import Francja from '../images/europa/paryz.jpg'
import Czechy from '../images/europa/czechy.jpg'
import Niemcy from '../images/europa/berlin.jpg'

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
        title: 'Austria',
        url: Austria,
      },
      {
        title: 'Bułgaria',
        url: Bułgaria,
      },
    ],
  },
]

const RotateContainer = () => {
  const Styles = () => ({
    rotate: {
      transform: `rotate(${Math.floor(
        Math.random() * 20 - 10
      )}deg) translateY(${Math.floor(Math.random() * 40 - 20)}px)`,
    },
    text: {
      color: 'black',
    },
  })

  return countriesData.map((item, index) => (
    <div key={index} className={'row-container'}>
      {item.countries.map((country, index) => (
        <div style={Styles().rotate} key={index} className={'singleContainer'}>
          <img src={country.url} alt={country.title} />
          <h4 style={Styles().text}>{country.title}</h4>
        </div>
      ))}
    </div>
  ))
}

const LeftSidebar = () => {
  return (
    <Layout>
      <Helmet>
        <title>Right Sidebar - Landed by HTML5 UP</title>
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
            <div className="singleContainer">
              <img src="images/europa/grecja.jpg" alt="austria" />
              <h4>Grecja</h4>
            </div>
            <div className="singleContainer">
              <img src="images/europa/barcelona.jpg" alt="austria" />
              <h4>Hiszpania</h4>
            </div>
            <div className="singleContainer">
              <img src="images/europa/amsterdam.jpg" alt="austria" />
              <h4>Holandia</h4>
            </div>
          </div>

          <div className="row-container">
            <div className="singleContainer">
              <img src="images/europa/portugalia.jpg" alt="austria" />
              <h4>Portugalia</h4>
            </div>
            <div className="singleContainer">
              <img src="images/europa/rumunia.jpg" alt="austria" />
              <h4>Rumunia</h4>
            </div>
            <div className="singleContainer">
              <img src="images/europa/szwecja.jpg" alt="austria" />
              <h4>Szwecja</h4>
            </div>
          </div>

          <div className="row-container">
            <div className="singleContainer">
              <img src="images/europa/londyn.jpg" alt="austria" />
              <h4>Anglia</h4>
            </div>
            <div className="singleContainer">
              <img src="images/europa/wlochy.jpg" alt="austria" />
              <h4>Włochy</h4>
            </div>
          </div>

          <div className="row-container">
            <div className="singleContainer-disabled">
              <img className="in-progress" alt="dania" />
              <h4>Dania in progress...</h4>
            </div>
            <div className="singleContainer-disabled">
              <img
                className="in-progress"
                src="images/europa/norwegia.jpg"
                alt="norwegia"
              />
              <h4>Norwegia in progress...</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LeftSidebar
