import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import AboutSlider from './Pages/FrontPage.js/AboutSlider';
import HomePage from './Pages/FrontPage.js/HomePage';
import SignUp from './Pages/FrontPage.js/SignUp';
import LogIn from './Pages/FrontPage.js/LogIn';
import Dashboard from './Pages/FrontPage.js/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutSlider} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
