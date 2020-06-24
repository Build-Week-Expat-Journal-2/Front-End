import React, { useState, useEffect } from "react";
import * as yup from "yup";
import registerSchema from '../validation/registerSchema'
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { push } = useHistory();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    firstName: "",
    location: ""

  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    firstName: "",
    location: ""
  });

  useEffect(() => {
    registerSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("auth/register", formState)
      .then((res) => {
         console.log(res.data)
        push("/login");
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    yup
      .reach(registerSchema, e.target.name)
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
    <form className="login">
      <h2>Register</h2>
      <br></br>
      <label>
      {errors.firstName.length > 0 ? (
        <p style={{ color: "red" }}>{errors.firstName}</p>
        ) : null}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formState.firstName}
          onChange={inputChange}
          required
        />
      </label>
      <br></br>
      <br></br>
      <label>
      {errors.location.length > 0 ? (
          <p style={{ color: "red" }}>{errors.location}</p>
        ) : null}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formState.location}
          onChange={inputChange}
          required
        />
      </label>
      <br></br>
      <br></br>
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
          required
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
          required
        />
      </label>
      <br></br>
      <br></br>
      <button onClick={formSubmit} disabled={buttonDisabled}>
        Submit
      </button>
      <br></br>
      <div >
      <br></br>
        <div>Already have an account?</div>
        <br></br>
        <Link to={"/login"}>
          <div>Login Here!</div>
        </Link>
      </div>
    </form>
  );
}