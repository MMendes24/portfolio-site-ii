import React from 'react';
import { Route, Switch } from 'react-router-dom'

//COMPONENTS
import {
  NavBar,
  Portfolio,
  Landing,
  FooterLinks,
  AboutMe
} from './components'


// STYLES
import './styles.css'
import { AppStyled } from './styles'

function App() {
  return (
    <AppStyled className="App">

      <NavBar />

      <Switch>

        <Route path="/portfolio" >
          <Portfolio />
        </Route>

        <Route path="/about" >
          <AboutMe />
        </Route>

        <Route path="/" >
          <Landing />
          <FooterLinks />
        </Route>
        
      </Switch>

    </AppStyled>
  );
}

export default App;
