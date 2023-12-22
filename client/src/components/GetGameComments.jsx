import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Auth from "../utils/authUtil";
import "../assets/css/GetGameComments.css";

function GameComment(props) {
  const userName = Auth.getUsername();
  const comments = props.gameComments;
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <Card.Header className="comment_background">Anonymous</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {comment.text} </p>
              <footer className="blockquote-footer">
                {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default GameComment;