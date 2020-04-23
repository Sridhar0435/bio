import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/MainBox/Main";
import Introduction from "./components/Details/Introduction";
import About from "./components/Details/About";
import Blog from "./components/Details/Blog";
import Projects from "./components/Details/Projects";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
