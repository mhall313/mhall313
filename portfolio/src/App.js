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
      <Router>
      <div className="App">

        <Navbar proj={this.state.proj}/>
        <Switch>
          <Route 
            exact path='/'
            render={props => (
              <Fragment>
                <Main />
              </Fragment>
            )}
          />
          <Route exact path='/projects' component={Projects}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
