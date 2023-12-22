import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import GameCardGrid from "../components/GameCardGrid";
import NavBar from "../components/Navbar";

const GameCatalog = () => {

  return (
    <div style={{ backgroundColor: "#444444" }}>
      <NavBar />
      <h1 className="text-light">Welcome to the Game Catalog!</h1>
      <GameCardGrid />
    </div>
  );
};

export default GameCatalog;
