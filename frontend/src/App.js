import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from "./components/404/404";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>

      <Router>

        <Header />

        <Switch>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/company'>

          </Route>

          <Route exact path='/profile'>

          </Route>

          <Route exact path='/'>

          </Route>

          <Route>
            <PageNotFound />
          </Route>

        </Switch>

      </Router>

    </div>
  )
}

export default App;
