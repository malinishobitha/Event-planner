import React from "react";
import './css/home.css';
import corporateImage from './photos/carporate.png';
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import conferenceImage from './photos/c10.png';
import conferenceImage1 from './photos/c9.png';
import conferenceImage2 from './photos/c8.png';
function Corporate(){
    return(
         <div className='Container-Fluid'>
            <div className="card mb-3 corporate-content" style={{width: "95%"}}>
  <div className="row g-0">
    <div className="col-md-4"> 
      <img src={corporateImage} class="img-fluid rounded-start" alt="corporate-image"/>
    </div>
    <div className="col-md-8 corporate-det">
      <div className="card-body card-content">
        <p className="card-text card-det">What's the key to hosting  a corporate event truly represent your brands? </p>
        <p className="card-text card-det">Corporate events are your chance to showcase your value, foster relationship and making a last impression. But with the so many moving
          parts-venue selection, schedules, branding and guest experience-how do you ensure everything comes together seamlessly losing sight of your goals?    </p>
     <p className='card-text card-det'>What if we told you we have the answer?</p>
     <p className='card-text card-det'>At the core of every success corporate event as a team that know how to bring a vision to life with precision.  Our corporate Event management
      service are designed
     </p>
      </div>
    
    </div>
  </div>
</div>
      <div className="service-head">  
        <h1>OUR SERVICES</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <div className="expertise">
        <div className="expertise-cart">
      <img src={conferenceImage} alt="conferenceimage"/>
      <button> Meetings & Conference    </button>
      </div>
      <div className="expertise-cart">
      <img src={conferenceImage1} alt="expertise-image"/>
      <button>Conference & Summits</button>
      </div>
      <div className="expertise-cart">
      <img src={conferenceImage2}alt="expertise-image"/>
      <button>Networking & Relationship Building Events</button>
      </div>
</div>
<div className="service-head">  
        <h1>KEY FEATURES</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <div className="event-det">
      <div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">BUSINESS MEETINGS & CONFERENCES</h5>
    <ul>
    <li>Board Meeting High Level company Discussion for Excutives.</li>
    <li>Stakeholders Meetings Update For Investor And Stakeholders</li>
    <li>Annual General Meetings (AGM) - Company-wide Review And Feature Plans.</li>
    <li>Sales Meetings - Strategy Discussion for Sales Teams. </li>
    </ul>

  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">CONFERENCES SUMMITS</h5>
    <ul>
    <li>Industry Conference - Large-Scale Gathering Focused On Industrial Trends.</li>
    <li>Leadership Summits - Exclusive Events For Executive And Decision-Makers</li>
    <li>Trade Conference - Showcasing Innovation And Networking. </li>
    <li>Academic Or Research Conference - Knowledge Sharing Within A 
      field </li>
    </ul>

  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">NETWORKING AND RELATIONSHIP-BUILDING</h5>
    <ul>
    <li>Corporate Dinners & Galas - Formal Events For High-Profile Guest. </li>
    <li>Business Networking Mixers-Casual Networking Opportunities.</li>
    <li>Speed Networking Events - Quick Introduction Among Professional. </li>
    
    </ul>

  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">PRODUCT & BRAND EVENTS</h5>
    <ul>
    <li>Product Launches Introducing New Product Or Services</li>
    <li>Brand Activation - Engaging Customers With Interactive Experience</li>
    <li>Press Conference - Annoncement To Media Stakeholders. </li>
    </ul>
    
  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">TEAM MANAGEMENT & EMPLOYEE CENTRIC EVENTS</h5>
    <ul>
    <li>Team Building Retreats - Outdoor or Adventure-Based Bonding Activies.</li>
    <li>Employee Appreciation Events-Recognizing Employee Contribution.</li>
    <li>Incentive Trips-Rewarding Top Performerce With Travel Experience</li>
    <li>Corporate Family Days - Encouraging Work-Life Balance. </li>
    </ul>
    
  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">Training & Development Events</h5>
    <ul>
    <li>Workshops  & Seminar - Skills - Building Session.</li>
    <li>Onboarding & Orientation Events - Introducing New Employees.</li>
    <li>Leadership Training Programs Developing Managerial Skills.</li>
    <li>Webinars & Virtual Training - Remote Learning Session. </li>
    </ul>
    
  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">TRADE SHOWS AND EXHIBITIONS</h5>
    <ul>
    <li>Industry Trade Shows - Showcasing Products And Services. </li>
    <li>Expo & Fairs - Large-Scale Business Exhibitions.</li>
    <li>Virtual Conferrence & Summits - Remote Professional Gathering. </li>
    <li>Live Streaming Events - Broadcasting Events To Global Audiences. </li>
    </ul>
    
  </div>
</div>

<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-title">AWARD CEREMONIES AND RECOGNITION EVENTS</h5>
    <ul>
    <li>Corporate Awards Nights - Recognizing Employee Achievements.</li>
    <li>Milestone - Celebrations Commeomorating Company Anniversaries.</li>
    </ul>
  </div>
</div>
<div className="card card1" style={{width: "18rem;"}}>
  <div className="card-body card1-body">
    <h5 className="card-title card1-tittle">CSR & CHARITY EVENTS</h5>
    <ul>
    <li>Fundarasing Galas - Raising Funds For Causes</li>
    <li>Corporate Social Responsibility (CSR) Intivates - Community Services Projects</li>
    <li>Charity Runs & Sports Events - Promoting Social Causes</li>
    </ul>
  </div>
  </div>
</div>
<div className="service-head">  
        <h1>TECHNICAL ABILITIES</h1>
        <img src={decoration} alt="decoration" />
        
        </div>
        <div className="card mb-3 corporate-content" style={{width: "95%"}}>
  <div className="row g-0">
    <div className="col-md-4"> 
      <img src={corporateImage} class="img-fluid rounded-start" alt="corporate-image"/>
    </div>
    <div className="col-md-8 corporate-det">
      <div className="card-body card-content">
        <h4>Harnessing cutting-Edge Technologival To Enhance Your Event Experience</h4>
      <ul>
        <li>Evets maangement Platform for scal eReal Time Cooridnation: Stay update And Organize through out the gwnt </li>
        <li>AV And Light Setups For Large scale Presentation: Capitvate your Audience with Profession Sound and Visuals </li>
        <li>Live Streaming For Remote participant" Expads Your Events Reach And Engagement Through seamless virtual Access</li>
        </ul>
             </div>
    
    </div>
  </div>
</div>       
         </div>
      
    );
}
export default Corporate