import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Header />

          <Route path="/" exact render={() => <Home heading="Home" />}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
