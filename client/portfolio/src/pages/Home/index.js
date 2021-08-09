import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        Home Page
    </div>
  );
};

export default Home;
