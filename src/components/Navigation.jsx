import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoggedState } from "../redux/actions";


function Navigation(props) {
  const { push } = useHistory();
  return props.state.isLogged ? (
    <nav>
      <h1>Expat</h1>
      <div>
        <Link to={"/protected"}>Dashboard</Link>
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
      </div>
    </nav>
  ) : (
    <nav>
      <h1>Expat</h1>
      <div >
        <Link to={"/register"}>Register</Link>
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