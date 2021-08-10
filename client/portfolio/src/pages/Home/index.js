import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import home from './home.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  image: {
    width: '80%',
    height: 'auto',
    margin: 'auto'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <img className={classes.image} src={home} alt="Home Page" />
    </div>
  );
};

export default Home;
