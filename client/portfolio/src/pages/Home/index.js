import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import home from '../../static/images/home.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  card: {
    marginTop: '100vh',
    width: '75vw',
    margin: 'auto',
    height: '75vh',
    opacity: '.9',
    display: 'flex'
  },
  image: {
    width: '70%',
    height: 'auto',
    margin: 'auto'
  },
  text: {
    textAlign: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();

  const Item = (props) => {
    return (
      <Card className={classes.card}>
        <Paper elevation={0}>
          <img className={classes.image} src={props.item.image} alt={props.item.name} />
          <Typography className={classes.text} variant="h5" component="h2">{props.item.text}</Typography>
        </Paper>
      </Card>
    )
  }

  const carousel = (props) => {
    const items = [
      {
        name: 'responsive image',
        image: home,
        text: 'Responsive web design'
      },
      {
        name: 'business image',
        image: home,
        text: 'For Businesses'
      },
      {
        name: 'artist image',
        image: home,
        text: 'For Artists'
      },
      {
        name: 'Creator image',
        image: home,
        text: 'For Creators'
      },
    ];

    return (
      <Carousel indicators={false} autoPlay={true}>
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    );
  }

  return (
    <div className={classes.root}>
      {carousel()}
    </div>
  );
};

export default Home;
