import React from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D3D3D3',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <Layout />
    </ThemeProvider>
  );
}

export default App;
