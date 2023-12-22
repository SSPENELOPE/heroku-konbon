/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Auth from '../utils/authUtil';

const SignUpPage = () => {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const postNewUserSignUp = async (e) => {
    e.preventDefault();
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      const response = await fetch("https://konbon-backend-b295c756b711.herokuapp.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(`${res.message}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
      } else {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
        setTimeout(() => {
          window.location.replace('/login');
        }, 2000)
      }
    } catch (error) {
      toast.error("Error during signup. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  };

  if(Auth.isLoggedIn()) {
    window.location.replace('/');
  } else {
    return (
      <>
        <Navbar />
        <div className="signup-form-wrapper">
          <form onSubmit={postNewUserSignUp} className="signup-form">
            <h1 className="text-light">Create an account</h1>
            <div className="signup-form-group">
              <label className="signup-form-label">Email:</label>
              <input
                required
                type="text"
                name="email"
                placeholder="Enter email: email@example.com"
                onChange={handleInputChange}
                className="signup-form-input"
              />
            </div>
            <div className="signup-form-group">
              <label className="signup-form-label">Username:</label>
              <input
                required
                type="text"
                name="username"
                placeholder="Create username"
                onChange={handleInputChange}
                className="signup-form-input"
              />
            </div>
            <div className="signup-form-group">
              <label className="signup-form-label">Password:</label>
              <input
                required
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleInputChange}
                className="signup-form-input"
              />
            </div>
            <button type="submit" className="signup-button">
              <span>Sign Up</span><i></i>
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default SignUpPage;