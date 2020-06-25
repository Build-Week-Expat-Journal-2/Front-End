import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { connect } from 'react-redux';
import {setLoggedState} from './redux/actions'
import "./App.css";
import UpdatePost from "./components/UpdatePost";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import StoryPage from './components/StoryPage';


function App(props) {
  const [storyList, setStoryList] = useState([]);

    useEffect(() => {
      if (localStorage.getItem('token')){
        localStorage.setItem('logged', true)
        props.setLoggedState(true)
      } else if (localStorage.getItem('token') === null){
        localStorage.setItem('logged', false)
        props.setLoggedState(false)
      }
    }, [props.isLogged, props.setLoggedState])

    const getStoryList = () => {
      axiosWithAuth()
        .get("/story")
        .then(res => setStoryList(res.data))
        .catch(err => console.log(err.response));
    };

    useEffect(() => {
      getStoryList();
    }, []);


  return (
    <Router>
    <div>
    <div>
      <Navigation />

        <Route exact path="/">
          <Redirect to='/dashboard'/>
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <PrivateRoute exact path='/dashboard' component={Dashboard}/>

        <PrivateRoute exact path = "/dashboard/post/:id"
        render= {props => <StoryPage {...props} getStoryList={getStoryList}/>} />

        <PrivateRoute exact path='/dashboard/update-post/:id' 
        render={props => <UpdatePost {...props} getStoryList={getStoryList} />}

        />
        



        
    </div>
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {setLoggedState})(App);
