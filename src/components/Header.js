import React from 'react'
import MobileMenu from './MobileMenu'

const Header = ({
  toggleHamburger,
  mobileActiveClass,
  menuLinks,
  siteTitle,
}) => {
  return (
    <React.Fragment>
      <div className={`navbar-menu ${mobileActiveClass}`}>
        <div id="titleBar">
          <a
            role="button"
            onClick={() => toggleHamburger()}
            className="toggle"
            aria-label="Open mobile menu"
          ></a>
        </div>
        <div id="navPanel">
          <MobileMenu siteTitle={siteTitle} menuLinks={menuLinks} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
