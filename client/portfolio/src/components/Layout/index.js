import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import routes from '../../routes';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

const Layout = () => {
  const classes = useStyles();
 
  return (
    <Container>
      <div className={classes.root}>
          {routes}
      </div>
    </Container>
  );
};

export default Layout;
