import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Dna } from "react-loader-spinner";
import Card from "react-bootstrap/Card";
import CustomPagination from "./CustomPagination";
import { toast } from "react-toastify";

function GameCard({ game }) {
  return (
    <Card style={{ width: "18rem" }} className="game-card">
      <Card.Img
        style={{ height: "12rem" }}
        variant="top"
        src={game.background_image}
      />
      <Card.Body className="game-card-body">
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>Released: {game.released}</Card.Text>
        <Link to={`/GameDetails/${game.id}`} className="btn btn-primary">
          Check this out
        </Link>
      </Card.Body>
    </Card>
  );
}

function GameCardGrid() {
  const [isLoading, setIsloading] = useState(true);
  const [gameData, setGameData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchGameData = async () => {
    setIsloading(true)
    const url = `https://konbob-frontend-000a1bc4c546.herokuapp.com/api/allGames/${page}`;

    const response = await fetch(url, {
      method: "GET",
    });

    const resData = await response.json();

    if (response.status === 200) {
      setGameData(resData);
      setIsloading(false);
    } else {
      toast.error(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  };

  const totalPages = Math.ceil(860599 / 20);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    fetchGameData();
  }, [page]);

  if (isLoading) {
    return (
      <div className="loading-animation">
        <Dna
          visible={true}
          height="280"
          width="280"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center">
        <Button className="w-50 align-self-center" variant="primary">
          Filter Coming Soon
        </Button>
        <div className="catalog-container">
          {/* .map() abstracts away the iteration process and handles it internally...which is baller */}
          {gameData.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <CustomPagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
}

export default GameCardGrid;
