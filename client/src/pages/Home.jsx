import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import doomguy from "../assets/images/doomguy-bg.webp";
import okage from "../assets/images/okage-bg.webp";
import supermariogalaxy from "../assets/images/supermariogalaxy-bg.webp";
import Auth from "../utils/authUtil";
import Particle from "../components/Particles";

function Home() {
  const userId = Auth.getUserId();
  const isLoggedIn = Auth.isLoggedIn();

  return (
    <div className="homepage-container">
       <Particle />
      <Navbar />
      <div className="d-flex p-2 justify-content-evenly align-items-center flex-wrap">
        <div className="jumbotron mt-1 custom-jumbotron bg-dark text-light">
          {isLoggedIn ? <div>How are you </div> : <div></div>}
          <h1 className="display-4 text-light">All about us!</h1>
          <p className="lead text-light">We connect People</p>
          <hr className="my-4 text-light" />
          <p className="text-light">Come along and find like-minded gamers.</p>
          <p className="lead text-light">
            <Link to="/signup" className="btn btn-warning text-light">
              Sign-up
            </Link>
          </p>
        </div>

        <div>
          <h2>Why you should join</h2>
          <Carousel className="carousel-container" interval={3000}>
            <Carousel.Item className="h-100 w-100">
              <img
                className="homepage-carousel-image border border-4 border-warning rounded"
                src={doomguy}
                alt="DoomDude"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>Create a profile and suggest game that you love!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <img
                src={okage}
                className="homepage-carousel-image border border-4 border-warning rounded"
                alt="Okage"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>Get suggestions from others on games to play</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <img
                src={supermariogalaxy}
                className="homepage-carousel-image border border-4 border-warning rounded"
                alt="Super Mario Galaxy"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>All based on your interactions!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={doomguy} className="d-block w-100" alt="..." />
                <h4>Some text for the carousel</h4>
              </div>
              <div class="carousel-item">
                <img src={okage} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={supermariogalaxy} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
