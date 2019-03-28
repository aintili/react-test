import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import About from "./About"
import {NavLink,Route,Switch} from "react-router-dom"
//import Switch from "react-router-dom"
//import Route from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/about" activeClassName="active">About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
