import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link as ScrollLink } from 'react-scroll'
import BG from '../images/banner_background.jpg'
import { Fade } from 'react-reveal'
import { makeStyles, createStyles, Typography } from '@material-ui/core'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import StarsIcon from '@material-ui/icons/Stars'
import HelpIcon from '@material-ui/icons/Help'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      top: '2em',
      left: '95%',
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    exampleWrapper: {
      position: 'relative',
      height: 380,
    },
    speedDial: {
      position: 'absolute',
    },
  })
)

const actions = [
  {
    icon: (
      <ScrollLink
        to="TopArticles"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
      >
        <StarsIcon
          color="action"
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </ScrollLink>
    ),
    name: 'TOP',
  },
  {
    icon: (
      <ScrollLink
        to="Statistics"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
      >
        <EqualizerIcon
          color="action"
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </ScrollLink>
    ),
    name: 'Statystyki',
  },
  {
    icon: (
      <ScrollLink
        to="Articles"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
        className={null}
      >
        <FileCopyIcon
          color="action"
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </ScrollLink>
    ),
    name: 'Artykuły',
  },
  { icon: <HelpIcon />, name: 'Info' },
  { icon: <InstagramIcon />, name: 'Instagram' },
  { icon: <FacebookIcon />, name: 'Facebook' },
]

const Banner = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <section id="banner">
      <Fade>
        <img src={BG} />
        <div className={classes.root}>
          <div className={classes.exampleWrapper}>
            <SpeedDial
              ariaLabel="SpeedDial example"
              className={classes.speedDial}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
              direction={'down'}
            >
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={<Typography>{action.name}</Typography>}
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </div>
        </div>
      </Fade>
      <ScrollLink
        to="articles"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={0}
        duration={1500}
        spy={true}
      />
    </section>
  )
}

export default Banner
