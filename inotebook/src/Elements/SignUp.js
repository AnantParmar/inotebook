import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp = (props) => {
  const [credentials, setCreadentials] = useState({name: "",email: "", password: "", cpassword: ""})
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const {name, email, password} = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password}),
      });
      const json = await response.json();
      if(json.success)
      {
        console.log(json)
        localStorage.setItem('token', json.authtoken)
        navigate("/login");
        props.showAlert("Account Created Successfully", "success")
      } else {
        props.showAlert("Invalid Credentials", "danger")
      }
      
}
const onChange = (e) => {
    setCreadentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="container">
      <h1>SignUp To Explore iNoteBook</h1>
      <form onSubmit={handleSubmit} className="my-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
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
            onChange={onChange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange} minLength={5} required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
