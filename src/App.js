import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
