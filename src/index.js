import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'; 
import { Provider } from 'react-redux'
import {   BrowserRouter as Router,   Switch,   Route, } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>          
      <Router> 

      <Route exact path = '/' component = {Product}/>
    </Router>
</Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
