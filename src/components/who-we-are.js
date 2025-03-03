import React from "react";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import aboutImage from './photos/Who we are.png';
import eventImage from './photos/event24.jpg';
import AboutImage  from './photos/About us.png';
function Whoweare() {
    return (
        <div className="Container-Fluid">
            <div className="service-head">
                <h1>WHO WE ARE</h1>
                <img src={decoration} alt="decoration" />
            </div>
            <div className="aboutus">
                <img src={aboutImage} alt="aboutimage" />
                <h1>ABOUT US</h1>
                <h4>With a decade of Experience, We specialize in creating exceptional events tailored to your vision. Our team is decided to delivering
                    seamless and memorable experiences, leveraging our extensive network and expertise to ensure every details is perfect.
                </h4>
            </div>
            <div className="card mb-3 corporate-content" style={{ width: "95%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={eventImage} class="img-fluid rounded-start" alt="corporate-image" />
                    </div>
                    <div className="col-md-8 corporate-det">
                        <div className="card-body card-content">
                            <h1>Who We Are</h1>
                            <h2>WE PRODUCE AWESOME EVENTS</h2>
                            <p className="card-text card-det">MN Events was founded to provide a comprehensive solution for all your marketing and event needs.  Our goal is to be your 'ONE STOP SOLUTION'. manageing every aspect with precision and professionalism. Whether for customer engagement or internal staff events, our team excels at transforming your ideas into seamless, impactful executions.</p>
                            <p className="card-text card-det">From the initial cocept to flawless delivery, we are dedicated tocreating exceptional experiences that align perfectly with your objectives and enhance your brand.  Trust us to bring your vision to life with unpapalleled expertise and attention to detail. </p>
                            <button>Get in Touch</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="whoweare-det">
    <h3>Who We Are</h3>
    <h1>WHY CHOOSE MN EVENT PLANNERS</h1>
    <div className="container">
        <div className="card whoevent-det" style={{ width: "18rem" }}>
            <div className="card-body who-eventbody">
                <h1>10 +</h1>
                <h3>
                    Years of Experience We were released more than 10 years ago and it still stays on top.
                </h3>
            </div>
        </div>
        <div className="card whoevent-det" style={{ width: "18rem" }}>
            <div className="card-body who-eventbody">
                <h1 >250 +</h1>
                <h3>
                    Events Conducted We have many returning customers that got to trust us as a solid partner.
                </h3>
            </div>
        </div>
        <div className="card whoevent-det" style={{ width: "18rem" }}>
            <div className="card-body who-eventbody">
                <h1>7500 +</h1>
                <h3>
                    Participants Engaged Successfully Completed 7500+ Project why we've been for so long.
                </h3>
            </div>
        </div>
    </div>
</div>
<img src={AboutImage} className="img-fluid" alt="aboutimage"></img>
        </div >

    );
}
export default Whoweare