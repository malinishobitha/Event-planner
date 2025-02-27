import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./css/home.css";
import longtable from "./photos/long-table.jpg";
import pinkFlower from "./photos/pink flower.jpg";
import flowerdecor from "./photos/flower decor.jpg";
import restaraunt from "./photos/restaurant-hall.jpg";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";

function HomePage() {
  return (
    <div className="Container-Field">
      {/* Carousel Section */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pinkFlower} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h1>PROFESSIONAL EVENT PLANNER</h1>
              <h2>Crafting Moments, Creating Memories</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={longtable} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h1>PROFESSIONAL EVENT PLANNER</h1>
              <h2>Crafting Moments, Creating Memories</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={flowerdecor} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h1>PROFESSIONAL EVENT PLANNER</h1>
              <h2>Crafting Moments, Creating Memories</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={restaraunt} className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption">
              <h1>PROFESSIONAL EVENT PLANNER</h1>
              <h2>Crafting Moments, Creating Memories</h2>
            </div>
          </div>
        </div>
    
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Our Services Section */}
      <div className="service-head">  
        <h1>OUR SERVICES</h1>
        <img src={decoration} alt="decoration" />
      </div>

      <div className="services">
        <div className="card" style={{ width: "18rem" }}>
          <img src="service-image.jpg" className="card-img-top" alt="Service" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div> 
</div>
  );
}

export default HomePage;
