import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import Number from "./components/Number";
// import Hello from "./components/Hello";




function App() {
  return (

    <BrowserRouter>
      {/* <p>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
      </p> */}
      <Switch>
        <Route exact path="/home">
          <Welcome></Welcome>
        </Route>
        <Route exact path="/:id">
          <Number></Number>
        </Route>
        <Route path="/:id/:color/:color1">
          <Number/>
          
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
