import React from 'react';
import { Route, Switch } from 'react-router-dom'

//COMPONENTS
import { NavBar } from './components'
import { Landing } from './components'
import { FooterLinks } from './components'
import { AboutMe } from './components'

import './styles.css'
import { AppStyled } from './styles'

function App() {
  return (
    <AppStyled className="App">

      <NavBar />

      <Switch>
        <Route>
          <AboutMe path="/about" />
        </Route>

        <Route>
          <Landing path="/" />
        </Route>

      </Switch>
      <FooterLinks />
    </AppStyled>
  );
}

export default App;
