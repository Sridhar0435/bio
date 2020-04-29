import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/MainBox/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  )

}

export default App;