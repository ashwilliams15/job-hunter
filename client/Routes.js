import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Networking from './components/Networking';
import Job from './components/Job';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Companies from './components/Companies';
import Journal from './components/Journal';

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/networking" component={Networking} />
          <Route path="/job" component={Job} />
          <Route path="/projects" component={Projects} />
          <Route path="/technologies" component={Technologies} />
          <Route path="/companies" component={Companies} />
          <Route path="/journal" component={Journal} />
        </Switch>
      </div>
    )
  }
}

export default Routes
