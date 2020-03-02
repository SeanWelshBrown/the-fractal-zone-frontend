import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Switch, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import About from './Static/About';
import FractalMachine from './Containers/FractalMachine';
import Gallery from './Containers/Gallery';
import NavBar from './Components/NavBar'
import Form from './Components/Form';
import NotFound from './Static/NotFound';

class App extends React.Component {
  
  handleLoginSubmit = (userInfo) => {
    console.log(userInfo);
  }

  handleRegisterSubmit = (userInfo) => {
    console.log(userInfo);
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    console.log("I'm supposed to render the profile!")
    // return  <ProfileContainer user={this.state.user} token={this.state.token} />
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/about" component={ About } />
          <Route path="/gallery" component={ Gallery } />
          {/* Uncomment this when profile link is ready to be rendered to the DOM */}
          {/* <Route path="/profile" render={ this.renderProfile } /> */}

          <Route path="/" exact component={ FractalMachine } />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
