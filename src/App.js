import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import NavbarTwo from "./containers/resto";
import Food from "./containers/makanan";

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resto" exact component={NavbarTwo} />
            <Route path="/resto/:id" component={Food} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
