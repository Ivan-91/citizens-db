import React from 'react'
import './App.css';
import { CitiData } from './citizens';
import Container from '@material-ui/core/Container';




function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
      
      <CitiData/>
      </Container>

    </div>
  );
}

export default App;
