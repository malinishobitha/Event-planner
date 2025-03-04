import React, { useState } from "react";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import aboutImage from "./photos/Who we are.png";
import eventImage from "./photos/event24.jpg";
import AboutImage from "./photos/About us.png";

function Whoweare() {
   
    return (
        <div className="container-fluid">
            <div className="service-head">
                <h1>WHO WE ARE</h1>
                <img src={decoration} alt="Decorative Line" />
            </div>

            <div className="aboutus">
                <img src={aboutImage} alt="About Us" />
                <h1>ABOUT US</h1>
                <h4>
                    With a decade of experience, we specialize in creating exceptional events tailored to your vision.
                    Our team is dedicated to delivering seamless and memorable experiences, leveraging our extensive
                    network and expertise to ensure every detail is perfect.
                </h4>
            </div>

            <div className="card mb-3 corporate-content" style={{ width: "95%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={eventImage} className="img-fluid rounded-start" alt="Corporate Event" />
                    </div>
                    <div className="col-md-8 corporate-det">
                        <div className="card-body card-content">
                            <h1>Who We Are</h1>
                            <h2>WE PRODUCE AWESOME EVENTS</h2>
                            <p className="card-text card-det">
                                MN Events was founded to provide a comprehensive solution for all your marketing and
                                event needs. Our goal is to be your "ONE STOP SOLUTION," managing every aspect with
                                precision and professionalism.
                            </p>
                            <p className="card-text card-det">
                                From the initial concept to flawless delivery, we are dedicated to creating exceptional
                                experiences that align perfectly with your objectives and enhance your brand. Trust us
                                to bring your vision to life with unparalleled expertise and attention to detail.
                            </p>
                            <button>Get in Touch</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whoweare-det">
                <h3>Who We Are</h3>
                <h1>WHY CHOOSE MN EVENT PLANNERS</h1>
                <div className="container">
                    {[
                        { number: "10 +", text: "Years of Experience We have over 10 years of experience in event planning." },
                        { number: "250 +", text: "Events Conducted Our customers trust us as a reliable event partner." },
                        { number: "7500 +", text: "Participants Engaged Successfully completed 7500+ projects over the years." },
                    ].map((item, index) => (
                        <div className="card whoevent-det" key={index} style={{ width: "18rem" }}>
                            <div className="card-body who-eventbody">
                                <h1>{item.number}</h1>
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <img src={AboutImage} className="img-fluid about-image" alt="About Us" />

            <div className="About-det">
                <h4>About Us</h4>
                <h1>Creating Exceptional Events with Expertise</h1>
                <p>
                    At Cool Cactus Events, we are dedicated to delivering standout event experiences tailored to your
                    needs. Our team specializes in transforming your vision into reality with meticulous attention to
                    detail and a commitment to excellence.
                </p>
                <p>
                    Our focus is on crafting unique and impactful events that resonate and leave a lasting impression.
                    From innovative planning to seamless execution, Cool Cactus Events ensures every moment is flawlessly
                    managed, allowing you to focus on enjoying the outcome.
                </p>
            </div>

         
        </div>
    );
}

export default Whoweare;
