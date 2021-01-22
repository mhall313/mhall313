import './App.css';
import React, { Component, Fragment } from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Projects from './components/pages/Projects';

class App extends Component {
  state = {
    proj: false
  };

  render() {

    return (
      <div>
        <Router>
        <div className="App">

          <Navbar proj={this.state.proj}/>
          <Switch>
            <Route exact path='/'component={Main}/>
            <Route exact path='/projects' component={Projects}/>
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
