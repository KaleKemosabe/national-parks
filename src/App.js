import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Hikes from './pages/Hikes';
import SingleHike from './pages/SingleHike';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hikes/" component={Hikes} />
      <Route exact path="/hikes/:slug" component={SingleHike} />
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;