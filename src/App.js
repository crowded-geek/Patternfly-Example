import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/index.jsx';
import LoginPage from './pages/login.jsx';
function App() {
  return (
    <Router>
      <Route exact path="/" component={ MainPage }/>
      <Route exact path="/login" component={ LoginPage }/>
    </Router>
  );
}

export default App;
