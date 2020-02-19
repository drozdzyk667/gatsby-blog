import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'
import Five from '../components/Five'
import Articles from '../components/Articles'
import TrackVisibility from 'react-on-screen'

const Home = () => {
  return (
    <Layout location="/">
      <Helmet
        htmlAttributes={{ lang: 'pl' }}
        title="Podróże Przez Świat"
        meta={[
          { name: 'description', content: 'Podróże Przez Świat' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>
      <Banner />
      <One />
      <Articles />
      <Two />
      <Three />
      <TrackVisibility once offset={600}>
        {({ isVisible }) => <Four isVisible={isVisible} />}
      </TrackVisibility>
      <Five />
    </Layout>
  )
}

export default Home
