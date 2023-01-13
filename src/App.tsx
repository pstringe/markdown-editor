import * as React from 'react';
import './App.css';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

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

const Editor = ({editorState, updateEditorState}: EditorProps) => {
  const handleChange = (event: any) => {
    updateEditorState(event.target.value);
  };
  return (
    <div className='editor'>
      <h1>Editor</h1>
      <textarea id="w3review" name="w3review" rows={4} cols={50} value={editorState ?? ''} onChange={handleChange}>
        {/* {editorState ?? ''} */}
      </textarea>
    </div>
  );
};

const Preview = ({editorState}: Partial<EditorProps>) => {
  return (
    <div className='preview'>
      <h1>Preview</h1>
      <div className='preview__output'>
        {editorState ?? ''}
      </div>
    </div>
  );
};

const Main = (editorProps: EditorProps) => {
  const { editorState, updateEditorState } = editorProps;
  return (
    <div className='main'>
      <Editor  editorState={editorState} updateEditorState={updateEditorState}/>
      <Preview editorState={editorState}/>
    </div>
  );
};

function App() {
  const [editorState, updateEditorState] = useState('');
  return (
    <ThemeProvider theme={theme ?? {}}>
    <Nav />
    <Container className="app">
      <Main editorState={editorState} updateEditorState={updateEditorState}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
