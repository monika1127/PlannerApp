import React from 'react'
import {BrowserRouter as Router,  Switch,  Route}  from 'react-router-dom'

import AboutSlider from './Pages/FrontPage.js/AboutSlider';
import FrontPage from './Pages/FrontPage.js/FrontPage';
import SignIn from './Pages/FrontPage.js/SignIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/about' component={AboutSlider}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
