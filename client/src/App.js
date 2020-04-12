import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import List from './components/List';
import ProductView from './components/ProductView';

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/view/:id">
          <ProductView />
        </Route>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
