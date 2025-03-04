import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./css/home.css";
import longtable from "./photos/long-table.jpg";
import pinkFlower from "./photos/pink flower.jpg";
import flowerdecor from "./photos/flower decor.jpg";
import restaraunt from "./photos/restaurant-hall.jpg";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import chooseImage from './photos/corporate-events-3.jpg';
import service1 from './photos/1.png';
import service2 from './photos/2.png';
import service3 from './photos/3.png';
import service4 from './photos/4.png';
import service5 from './photos/5.png';
import service6 from './photos/6.png';
import service7 from './photos/7.png';
import service8 from './photos/8.png';
import service9 from './photos/9.png';
import service10 from './photos/10.png';
import service11 from './photos/11.png';
import service12 from './photos/12.png';
function HomePage() {
  return (
    <div className="Container-Fluid">
      {/* Search bar */}
      <nav class="navbars bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">BOOK AN APPOINTMENT </button>
    </form>
  </div>
</nav>
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
        <div class="card" style={{width: "20rem"}}>
  <img src={service1} class="card-img-top" alt="specificimages"/>
  <div class="card-body">
    <h5 class="card-title">MICE Events</h5>
    <p class="card-text">Meetings, Incentives, Conference Meetings</p>
    <a href="Mice" class="btn btn-primary">SPECIFICS</a>
  </div>
  </div>
  <div class="card" style={{width: "20rem"}}>
  <img src={service11} class="card-img-top" alt="speicficimages"/>
  <div class="card-body">
    <h5 class="card-title">Product Launching Events</h5>
    <p class="card-text">Launching a new products is a crucial moment for every business.  This is requires a combination of strategic planning.</p>
    <a href="Launching" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service12} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Company Gathering</h5>
    <p class="card-text">MN Event  Organizer is a specialist in organizing memorable and impactful corporate meetings.</p>
    <a href="Gathering" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service2} class="card-img-top" alt="specificimages"/>
  <div class="card-body">
    <h5 class="card-title">Team Building</h5>
    <p class="card-text">Organizing a team-building event can be a highly rewarding experience, offering numerous benefits to both the organizer and the participants</p>
    <a href="Building" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service9} class="card-img-top" alt="specificimages"/>
  <div class="card-body">
    <h5 class="card-title">Themed Catering
    </h5>
    <p class="card-text">Each of these themes unique dining experience, transporting guest to a different time or place and making the evening truly unforgettadble</p>
    <a href="Catering" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service10} class="card-img-top" alt="specificimages"/>
  <div class="card-body">
    <h5 class="card-title">Tour Organizer
    </h5>
    <p class="card-text">Our passion is a curating unforgettadble journeys, bring together like-minded adventures, and revealing the hidden gems of our planet. </p>
    <a href="Tour" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service3} class="card-img-top" alt="specificimages"/>
  <div class="card-body">
    <h5 class="card-title">Sound Systems</h5>
    <p class="card-text">We are a provider of sound system rental services with various package options ranging from speakers, wireless mic, cable mic, mixer etc.</p>
    <a href="Sound" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service4}class="card-img-top" alt="specificimage"/>
  <div class="card-body">
    <h5 class="card-title">Lighting</h5>
    <p class="card-text">We are a provider of event lighting rental services with various package options ranging from par LED, moving head, halogen, smoke machine, etc. </p>
    <a href="Lighting" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service5} class="card-img-top" alt="specificimage"/>
  <div class="card-body">
    <h5 class="card-title">Entertainment</h5>
    <p class="card-text">We are a provider various Entertainment such as dance (traditional & modern), music, event MC, Usher, and SPG </p>
    <a href="#" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service6} class="card-img-top" alt="specificimage"/>
  <div class="card-body">
    <h5 class="card-title">Photography</h5>
    <p class="card-text">We also provide various Photography Services Such as Candid, Videography, Albums </p>
    <a href="#" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Stage Decoration</h5>
    <p class="card-text">We Provide various types of stages for your events such as gala dinners, awards night,etc. </p>
    <a href="#" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
<div class="card" style={{width: "20rem"}}>
  <img src={service8} class="card-img-top" alt="Specificimages"/>
  <div class="card-body">
    <h5 class="card-title">Multimedia</h5>
    <p class="card-text">We are a provider of multimedia rental  services for event/meeting needs such as projectors, laptop, computers (PCs), Printers, Drone Camera etc.  </p>
    <a href="#" class="btn btn-primary">SPECIFICS</a>
  </div>
</div>
</div>
<div className="card mb-3" style={{ width: "95%" }}>
  <div className="row g-0">
    <div className="col-md-6">
      <div className="card-body chooseimg">
        <h1 className="card-title ">Why should you choose Us?</h1>
        <img src={decoration} alt="decoration" className="decoration-img" />
        <p>Official Company</p>
        <p>Professional Teamwork</p>
        <p>Best Price</p>
        <p>Event Consulting</p>
        <p>Multimedia Support</p>
        <p>Generator Support</p>
        <p>Stage Rental</p>
      </div>
    </div>
    <div className="col-md-6">
      <img src={chooseImage} className="img-fluid rounded-start" alt="chooseimg" />
    </div>
  </div>
</div>


      </div> 

  );
}

export default HomePage;
