import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import { BrowserRouter, Switch, Route, Redirect, Routes } from "react-router-dom";
import Footer from './component/Footer';
import Contact from './component/Contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path ='/Footer' element = {<Footer/>} />
          <Route path = '/Contact' element= {<Contact />} />
          <Route path = '/' element ={<Main/>} />
        </Routes>
        
      </div>
      </BrowserRouter>
    )
  };
}

export default App;
