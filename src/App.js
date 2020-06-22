import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { connect } from 'react-redux';
import {setLoggedState} from './redux/actions'

function App(props) {
    const { isLogged } = props.state
    const { setLoggedState} = props
    useEffect(() => {
      if (localStorage.getItem('bwSpotifyToken')){
        localStorage.setItem('logged', true)
        setLoggedState(true)
      } else if (localStorage.getItem('bwSpotifyToken') === null){
        localStorage.setItem('logged', false)
        setLoggedState(false)
      }
    }, [isLogged, setLoggedState])
  return (
    <div>
  
  
 <Router>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/protected'>Dashboard</Link>
        <Switch>
            <PrivateRoute exact path='/protected' component={Dashboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
        </Switch>
    </Router>
    
    </div>
  );
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {setLoggedState})(App);
