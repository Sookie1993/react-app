import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './App';
import About from './about';

const Routers = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)
export default Routers;