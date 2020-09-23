import React from 'react';

//COMPONENTS
import { NavBar } from './components'
import { Landing } from './components'
import { Footer } from './components'

import './styles.css'
import { AppStyled } from './styles'

function App() {
  return (
    <AppStyled className="App">
      <NavBar />
      <Landing />
      <Footer />
    </AppStyled>
  );
}

export default App;
