import React, { useState } from "react";
import "./StarRating.css";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import AddGameComments from "../AddGameComments";
import GetGameComments from "../GetGameComments";

const StarRatingComponent = (prop) => {
    console.log(prop.game);
    const [rating, setRating] = useState(0);
    const StarRating = prop.game;
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        key={index}
                        type="button"
                        className={index <= rating ? "star on" : "star off"}
                        onClick={() => setRating(index)}
                    >
                        &#9733;
                    </button>
                );
            })}
        </div>
    );
};

export default StarRatingComponent; //test 
