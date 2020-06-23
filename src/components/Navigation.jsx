import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoggedState } from "../redux/actions";
import Dashboard from "./Dashboard";

function Navigation(props) {
  const { push } = useHistory();
  return props.state.isLogged ? (
    <nav>
      <h1>Expat User Profile</h1>
      <br></br>
      <div>
        <br></br>
        <Link
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            props.setLoggedState(false);
            push("/");
          }}
          to={"/logout"}
        >
          Logout
        </Link>
          <Dashboard/>
      </div>
    </nav>
  ) : (
    <nav>
      <h1>Expat Journal </h1>
      <br></br>
      <div >
        <Link to={"/register"}>Register</Link>
        <br></br>
        <br></br>
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { setLoggedState })(Navigation);