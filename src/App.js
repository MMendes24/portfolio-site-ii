import React from 'react';

//COMPONENTS
import { NavBar } from './components'
import { Landing } from './components'

import './styles.css'
import { AppStyled } from './styles'

function App() {
  return (
    <AppStyled className="App">
      <NavBar />
      <Landing />
    </AppStyled>
  );
}

export default App;
