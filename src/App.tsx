import * as React from 'react';
import './App.css';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const Nav = () => {
  return (
    <div className='nav'>
      <h1>Nav</h1>
    </div>
  );
};

const Editor = () => {
  return (
    <div className='editor'>
      <h1>Editor</h1>
    </div>
  );
};

const Preview = () => {
  return (
    <div className='preview'>
      <h1>Preview</h1>
    </div>
  );
};

const Main = () => {
  return (
    <div className='main'>
      <Editor />
      <Preview />
    </div>
  );
};


function App() {
  return (
    <ThemeProvider theme={theme ?? {}}>
    <Nav />
    <Container className="app">
      <Main />
    </Container>
    </ThemeProvider>
  );
}

export default App;
