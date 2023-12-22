import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Auth from "../utils/authUtil";
import "../assets/css/GetGameComments.css";

function GameComment(props) {
  const userName = Auth.getUsername();
  const comments = props.gameComments;

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate.toString(); // Convert to string
  }
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <Card.Header className="comment_background">Anonymous</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {comment.text} </p>
              <footer className="blockquote-footer">
                <small className="text-muted">{formatDate(comment.createdAt)}</small>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default GameComment;