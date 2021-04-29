import React from 'react'
import './App.css';
import { CitiData } from './citizens';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';




function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
      <Typography> Citizens Hierarchy</Typography>
      <CitiData/>
      </Container>

    </div>
  );
}

export default App;
