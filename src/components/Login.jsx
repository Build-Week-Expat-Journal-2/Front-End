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
  const [loginFailed, setLoginFailed] = useState(false)
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

  useEffect(() => {
    if (loginFailed === true){
      const errDiv = document.querySelector('.loginFailed')
      errDiv.classList.remove('hide')
    }
  }, [loginFailed])

  const formSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("auth/login", formState)
    .then(res => {
      window.localStorage.setItem("token", res.data.payload)
      props.setLoggedState(true);
      push("/protected");
    })
    .catch( err => {
      setLoginFailed(true)
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
    <form className="login" onSubmit={formSubmit}>
      <h2>Login</h2>
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
      <br></br>
      <br></br>
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
      <br></br>
      <br></br>
      <button onClick={formSubmit} disabled={buttonDisabled}>
        Login
      </button>
      <br></br>
      <br></br>
      <div>
        <div>Don't have an account?</div>
        <Link to={"/register"}>
          <div>Create Account</div>
        </Link>
      </div>
    </form>
  );
}

export default connect(null, { setLoggedState })(Login);