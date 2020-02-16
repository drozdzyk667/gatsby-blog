import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'
import Header from './Header'

const Layout = ({ children, ...props }) => {
  const [isActive, setIsActive] = React.useState(true)
  const [mobileActiveClass, setMobileActiveClass] = React.useState('')

  const toggleHamburger = () => {
    setIsActive(!isActive)
    isActive
      ? setMobileActiveClass('navPanel-visible')
      : setMobileActiveClass('')
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              menuLinks {
                name
                link
                items {
                  link
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <div className={props.location === '/' ? 'landing' : ''}>
            <div id={'page-wrapper'}>
              <Header
                mobileActiveClass={mobileActiveClass}
                toggleHamburger={toggleHamburger}
                menuLinks={data.site.siteMetadata.menuLinks}
                siteTitle={data.site.siteMetadata.title}
              />
              {children}
            </div>
          </div>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
