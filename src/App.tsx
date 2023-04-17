import * as React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './theme';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useState } from 'react';
import Box from '@mui/material/Box';

const styles = {
  main: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
    }, 
    editor: {
      width: '50%',
      height: '100%',
    },
    preview: {
      width: '50%',
      height: '100%',
    }
  },
};

interface EditorProps {
  editorState: string;
  updateEditorState: (editorState: string) => void;
}

const Nav = () => {
  return (
    <div className='nav'>
      <h1>Nav</h1>
    </div>
  );
};

const Main = (editorProps: EditorProps) => {
  const { editorState, updateEditorState } = editorProps;
  return (
    <Box className='main' sx={styles.main.root}>
      <Box className='editor' sx={styles.main.editor}>
        <Editor  value={editorState} onChange={updateEditorState}/>
      </Box>
      <Box className='preview' sx={styles.main.preview}>
        <Preview value={editorState}/>
      </Box>
    </Box>
  );
};

function App() {
  const [editorState, updateEditorState] = useState('');
  return (
    <ThemeProvider theme={theme}>
    <Nav />
    <Container className="app">
      <Main editorState={editorState} updateEditorState={updateEditorState}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
