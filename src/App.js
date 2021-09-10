import { useEffect, useState } from "react";
import "./App.css";
import Country from "./country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./details";

let App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <div className="main-div">
              <h1 className="heading">Countries</h1>
              <input
                className="search"
                type="text"
                placeholder="Search for Countries"
              />
            </div>
            <Country />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
