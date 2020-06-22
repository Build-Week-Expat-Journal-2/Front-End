import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";

import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
     <div>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/protected'>Dashboard</Link>
            </li>
        </ul>
        <Switch>
            <PrivateRoute exact path='/protected' component={Dashboard}/>
            <Route path='/login' component={Login}/>
            <Route component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
