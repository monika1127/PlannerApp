import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutSlider from './Pages/FrontPage.js/AboutSlider';
import HomePage from './Pages/FrontPage.js/HomePage';
import SignUp from './Pages/FrontPage.js/SignUp';
import LogIn from './Pages/FrontPage.js/LogIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutSlider} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
