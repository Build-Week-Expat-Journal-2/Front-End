import React, { useState, useEffect } from "react";
import * as yup from "yup";
import loginSchema from "../validation/loginSchema"
import { Link, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { setLoggedState } from "../redux/actions/index"
import { connect } from "react-redux";
import "../App.css"


function Login(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { push } = useHistory();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    loginSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);



  const formSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("auth/login", formState)
    .then(res => {
      window.localStorage.setItem("token", res.data.token)
      localStorage.setItem("id", res.data.id)
      props.setLoggedState(true);
      push("/protected");
    })
    .catch( err => {
       console.log(err)
    })
};
  
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <div >
      <h1>Login</h1>
      <label>
        {errors.username.length > 0 ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={inputChange}
        />
      </label>
      <label>
        {errors.password.length > 0 ? (
          <p style={{ color: "red" }}>{errors.password}</p>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <button onClick={formSubmit} disabled={buttonDisabled}>
        Login
      </button>
      <div >
        <p>New Here?</p>
        <Link to={"/register"}>
          <div >Create Account</div>
        </Link>
      </div>
      </div>
    </form>
  );
}

export default connect(null, { setLoggedState })(Login);