import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Auth from "../utils/authUtil";
import { toast } from "react-toastify";
import "../assets/css/GetGameComments.css"

function AddGameComments(props) {
  const [formState, setFormState] = useState({ usercomment: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = {
      text: formState.usercomment,
      user_id: Auth.getUserId(),
      game_id: props.gameId,
    };
    const response = await fetch("https://konbob-frontend-000a1bc4c546.herokuapp.com/comment/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    
    if (response.status === 200) {
      toast.success(`Cool Comment`, {
        position: toast.POSITION.BOTTOM_CENTER,
        draggable: false,
      });
      window.location.reload();
    } else if (response.status === 500) {
      toast.success(`Fix your comment`, {
        position: toast.POSITION.BOTTOM_CENTER,
        draggable: false,
      });
    }
  };

  const username = Auth.getUsername();

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <Card>
            <Card.Header>Add a Comment</Card.Header>
            <Card.Body  className="d-flex flex-column comment_background">
              <Card.Title>{username}</Card.Title>
              <Form.Group>
                {/* <textarea
                  name="usercomment"
                  id="usercomment"
                  placeholder="Tell us about your experience"
                  cols="50"
                  rows="4"
                ></textarea> */}
                <Form.Control
                  as="textarea"
                  name="usercomment"
                  id="usercomment"
                  onChange={handleChange}
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
                <Button className="butn" type="submit" variant="dark">
                  Submit
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default AddGameComments;