import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from './container/Main';
import News from './components/News/News';
import AddNews from './components/AddNews/AddNews';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/news" component={News} />
          <Route path="/add" component={AddNews} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
