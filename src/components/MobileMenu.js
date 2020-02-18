import React from 'react'
import { Link } from 'gatsby'
import Select from 'react-select'
import { navigate } from 'gatsby'

const MobileMenu = props => {
  const customStyles = {
    control: (styles, state) => ({
      ...styles,
      marginLeft: '-10px',
      border: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      transition: '0.2s',
      marginBottom: state.menuIsOpen ? '15.5em' : '',
      cursor: 'pointer',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'white',
      transition: '0.2s',
      fontWeight: 500,
      '&:hover': {
        color: '#e44c65',
      },
    }),
    menu: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      margin: 0,
    }),
    valueContainer: styles => ({
      ...styles,
      height: '60px',
    }),
    option: styles => ({
      ...styles,
      padding: '6px',
      cursor: 'pointer',
      fontWeight: 500,
      transition: '0.2s',
      background: 'transparent',
      fontFamily: '"Roboto", Helvetica, sans-serif',
      fontSize: '0.9em',
      '&:hover': {
        color: 'orange',
        background: 'transparent',
      },
    }),
  }

  const options = () => {
    const optionMenu = []

    props.menuLinks.map(link => {
      if (link.items) {
        link.items.map(sublink =>
          optionMenu.push({
            value: sublink.name,
            label: sublink.name,
            url: sublink.link,
          })
        )
      }
    })
    return optionMenu
  }

  const handleChangeOption = selected => {
    options().map(item => {
      if (item.value === selected.value) {
        navigate(item.url)
      }
    })
  }

  return (
    <nav>
      {props.menuLinks.map(link =>
        link.items ? (
          <Select
            key={link.name}
            styles={customStyles}
            placeholder={link.name}
            value={null}
            options={options()}
            onChange={handleChangeOption}
            components={{ IndicatorSeparator: () => null }}
            isSearchable={false}
          />
        ) : (
          <div key={link.name}>
            <Link className="link depth-0" to={link.link}>
              {link.name}
            </Link>
          </div>
        )
      )}
    </nav>
  )
}

export default MobileMenu
