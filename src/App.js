import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddSong from './components/AddSong';
import Navigation from './components/Navigation';
import './App.css';
import {store} from './stores/Store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
          <Route exact path="/" component={AddSong} />
          </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
