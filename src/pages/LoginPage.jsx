import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Auth from '../utils/authUtil';


function LoginPage() {
  const [formState, setFormState] = useState({ userEmail: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userEmail: formState.userEmail,
      password: formState.password,
    };

    console.log(data);

    const response = await fetch("https://konbon-backend-b295c756b711.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const resData = await response.json()
    console.log(response);
    console.log("Response Data:", resData);

    // Check if the cookie is received
    console.log("Document Cookie:", document.cookie);


    if (response.status === 200) {
      toast.success(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      localStorage.setItem("JWT", JSON.stringify(resData.jwt))
      setTimeout(() => {
        // window.location.replace("/");
      }, 2000)
    } else {

      toast.error(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  };

  if (Auth.isLoggedIn()) {
    window.location.replace('/');
  } else {
    return (
      <>
        <Navbar />
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <h1 className="welcomeback">Welcome Back</h1>
            <div className="form-section">
              <label htmlFor="userEmail">Email</label>
              <input
                type="text"
                required
                className="form-input"
                id="userEmail"
                name="userEmail"
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </div>
            <div className="form-section">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="SunnySunShine232"
                value={formState.password}
              />
            </div>
            <input type="submit" value="Log In" />
            <div className="mt-3">
              <p className="text-light">
                Dont have an account yet? <Link to="/signup">Signup Here</Link>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginPage;
