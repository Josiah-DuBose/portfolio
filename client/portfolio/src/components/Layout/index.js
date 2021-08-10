import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import routes from '../../routes';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '2%',
    display: 'flex'
  }
}));

const Layout = () => {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {routes}
      </Container>
    </div>
  );
};

export default Layout;
