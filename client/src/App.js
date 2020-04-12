import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './components/List';

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
