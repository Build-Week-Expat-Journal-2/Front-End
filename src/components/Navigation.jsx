import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoggedState } from "../redux/actions";
import Dashboard from "./Dashboard";
import "../App.css";

function Navigation(props) {
  const { push } = useHistory();
  
  return props.state.isLogged ? (
    <nav >
      <div>
        <Link 
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            props.setLoggedState(false);
            push("/");
          }}
          to={"/logout"}>
          Logout
        </Link>
          <Dashboard/>
      </div>
    </nav>
  ) : (
    <div >
    <nav >
    <img src="https://www.freelogodesign.org/file/app/client/thumb/10f9860d-2f4f-47dc-ac63-716d9bfbba54_200x200.png?1592777050189" alt="expat logo"/>
     
      <div >
      <Link to={"/register"}>Home</Link>
      </div>
      <div  >
      <Link to={"/register"}>About</Link>
      </div>
      <div  >
      <Link to={"/register"}>Team</Link>
      </div>
      <div >
      <Link to={"/register"}>Contact</Link>
      </div>
      <div >
      <Link to={"/register"}>Register</Link>
      </div>
      <div >
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { setLoggedState })(Navigation);