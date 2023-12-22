/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/css/Navbar.css";
import "./assets/css/Home.css";
import "./assets/css/login.css"
import "./assets/css/GameCatalog.css"
import "./assets/css/SignUpPage.css"
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import GameCatalog from "./pages/GameCatalog";
import Profile from "./pages/Profile";
import gameHandler from "./utils/gameHandler";
import GameDetails from "./pages/GameDetails";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState({});

  const data ={ isLoading, setIsloading, games, user }
  return (
    <Router>
      <ToastContainer theme="colored" autoClose={2000} />
      <Routes>
        {/* Routes to the pages we want to show */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/GameCatalog" element={<GameCatalog data={data} />} />
        <Route path="/profile" element={<Profile data={data} />} />
        <Route path="/GameDetails/:gameId" element={<GameDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;