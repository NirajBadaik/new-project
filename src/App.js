import React from "react";
import "./App.css";

//components
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Couple from "./components/Couple";
// import Controller from "./components/Controller";
// import CountDown from "./components/CountDown";
// import Location from "./components/Location";
// import Nav from "./components/Nav";
// import Head from "./components/Head";
// import Menu from "./components/Menu";
import RSVP from "./components/RSVP";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Menu />
      <Head />
      <Couple />
      <Location />
      <CountDown /> */}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/RSVP">
            <RSVP />
          </Route>
          <Home />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
