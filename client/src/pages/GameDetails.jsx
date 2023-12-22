import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import GameComments from "../components/AddGameComments";
import GameInfo from "../components/GameInfo";

const GameDetails = () => {
  const { gameId } = useParams();

  // You need these two together (Move these to the GameDetails Page)
  // Call the getGameById in a 'useEffect' hook.
  // Create a local 'isLoading' state to show loading screen while we get the data
  const [gameData, setGameData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const getGameById = async (gameId) => {
    const url = `https://konbob-frontend-000a1bc4c546.herokuapp.com/api/gameById/${gameId}`;

    const response = await fetch(url, {
      method: "GET",
    });

    const resData = await response.json();
    if (response.status === 200) {
      setGameData(resData);
      setIsLoading(false);
    } else {
      alert(`${resData.message}`); // Change this to toast.errornpm
      setTimeout(() => {
        window.location.replace("/GameCatalog");
      }, 2000);
    }
  };

  useEffect(() => {
    getGameById(gameId);
  }, [gameId]);
  
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <NavBar />
        </div>

        <div>
          <GameInfo game={gameData} />
        </div>
      </div>
    );
  }
};

export default GameDetails;
