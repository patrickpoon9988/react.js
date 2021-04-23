import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from './component/Footer';
import Contact from './component/Contact';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path ='/Footer' component= {Footer} />
          <Route path = '/Contact' component= {Contact} />
          <Route path = '/' component ={Main} />
        </Switch>
        
      </div>
      </BrowserRouter>
    )
  };
}

export default App;
