import React from "react";
import Main from "./Main";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
