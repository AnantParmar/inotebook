import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCreadentials] = useState({email: "", password: ""})
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json)

          const userDetail = await fetch(`http://localhost:5000/api/auth/getuser`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": json.authToken
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });
      
          const axs = await userDetail.json();
          console.log(axs.name)
          // const getUser = await response.json();
          // console.log(userDetail)

          if(json.success) {
            // Save the auth Token and redirect;
            // console.log(json.authToken)
            localStorage.setItem('token', json.authToken)
            // console.log(localStorage.getItem('token'))
            navigate("/");
            props.setUser(axs.name)
            props.showAlert(`Hey ${axs.name}, You are Logged In Successfully`, "success")
          } else {
            props.showAlert("Invalid Details", "danger")
          }

          
    }
    const onChange = (e) => {
        setCreadentials({...credentials, [e.target.name]: e.target.value})
      }
  return (
    <div className="container">
      <h1>Login To iNoteBook</h1>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button className="btn btn-primary" >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
