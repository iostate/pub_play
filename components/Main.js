import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import 3 components to be rendered by react-router-dom
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import ReactComponent from './ReactComponent';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* Renders both '/roster' && '/roster/:id' */}
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/reactcomponent" component={ReactComponent} />
    </Switch>
  </main>
);

export default Main;
