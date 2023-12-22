import React, { useState, useEffect } from "react"; // Import our hooks from the React Package
import { Link } from "react-router-dom";

function Example(props) {
  const [title, setTitle] = useState("Title"); // Initial value of 'title'
  const [isLoading, setIsLoading] = useState(true); // Intial value of 'isLoading'

  async function loadUserData() {
    console.log("Title Before: ", title);

    setTimeout(() => {
      console.log("We used the useEffect");
      setTitle("Hello World"); // Update the 'title' value
      setIsLoading(false); // Update the 'isLoading' value
    }, 3000);

    // Makes request to server
    console.log("Title After: ", title);
  }

  // useEffect runs on page load
  useEffect(() => {
    console.log("LOADING...");
    loadUserData();
  }, []); // This is the re-render conditions

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{title}</h1>
        <Link to="/login">Login</Link>
        <h2>{props.user}</h2>
        <h1 className="navbar">This would be the navbar</h1>
      </div>
    );
  }
}

export default Example;
