import React from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import background from './static/images/main.jpg';

const useStyles = makeStyles((theme) => ({
  siteContainer: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    filter: 'opacity(0.75)',
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#D3D3D3',
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.siteContainer}>
      <ThemeProvider theme={theme}>
          <NavBar />
          <Layout />
      </ThemeProvider>
    </div>
   
  );
}

export default App;
