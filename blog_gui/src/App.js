import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";


function App() {
  return (
    <Router >
      <Navbar/>

      <Switch>
        <Route path="/details" component={BlogDetails}/>
        <Route path="/" component={Home}/>
      </Switch>

    </Router>
  );
}

export default App;
