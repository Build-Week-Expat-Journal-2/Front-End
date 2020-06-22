import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    setCredentials({
      ...credentials, 
      [e.target.name]: e.target.value
    })
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/protected")
      })
      .catch(err => {
        console.log(err)
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome!</h1>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="username"
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
