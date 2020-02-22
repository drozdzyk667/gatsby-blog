import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Carousel } from 'react-responsive-carousel'
import yyy from '../images/article_1.jpg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: '3em',
      boxShadow: '2px 2px 15px 2px lightblue',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    carousel: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '2em',
    },
    likeButton: {
      marginLeft: 'auto',
      transition: '0.3s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.3)',
      },
    },
  })
)

const SingleArticle = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            K
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia className={classes.media} image={yyy} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          color="secondary"
          aria-label="add to favorites"
          className={classes.likeButton}
        >
          <a href={'https://www.instagram.com/p/B81vkobHVHn/'} target="_blank">
            <FavoriteIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  )
}

const Articles = () => {
  const classes = useStyles()
  return (
    <section id="Articles">
      <Carousel
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        transitionTime={1000}
        infiniteLoop
      >
        <div className={classes.carousel}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
        <div className={classes.carousel}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
        <div className={classes.carousel}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
      </Carousel>
    </section>
  )
}

export default Articles
