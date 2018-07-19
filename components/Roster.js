import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

class Roster extends Component {
  render() {
    return (
      <div>
        {/* The following title is rendered for all files that begin with '/roster' */}
        <h2>This is a Roster Page!</h2>
        <Switch>
          <Route exact path="/roster" component={FullRoster} />
          <Route path="/roster/:number" component={Player} />
        </Switch>
      </div>
    );
  }
}

export default Roster;
