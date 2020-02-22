import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import TrackVisibility from 'react-on-screen'
import Content from '../components/Content'
import TopArticles from '../components/TopArticles'
import Statistics from '../components/Statistics'
import Articles from '../components/Articles'
import { Divider } from '@material-ui/core'

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
      <Content>
        <TopArticles />
        <Divider variant={'middle'} />
        <TrackVisibility once>
          {({ isVisible }) => <Statistics isVisible={isVisible} />}
        </TrackVisibility>
        <Divider />
        <Articles />
      </Content>
    </Layout>
  )
}

export default Home
