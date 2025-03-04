import React from 'react';
import miceImage from './photos/MICE.png';
function Mice(){
    return(
   <div className='Container-Fluid'>
        <nav class="navbars bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">BOOK AN APPOINTMENT </button>
    </form>
  </div>
</nav>
<img src={miceImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>MICE EVENTS </h1>
    <h2>DESCRIPTION</h2>
    <p>MICE represents a sector of the tourism industry that organizes large-scale events, such as international conferences, trade shows, and incentive travel programs.  These events are integral for various industries to negwork, grow, and achieve their objectives.  Our comprehensive MICE services offer the expertise and resources required to plan, manage, annd execute such events successfully.</p>
  <h2>Services Offerings:</h2>
  <h2>1.Meeting Management:</h2>
  <ul>
    <li>Venue selection and booking.</li>
    <li>Audio-visual equipment setup and technical support.</li>
    <li>Agenda creation and time management.</li>
    <li>On-site coordination.</li>
  </ul>
  <h2>2. Incentive Travel Programs:</h2>
  <ul>
    <li>Destination research and selection.</li>
    <li>Itinerary planning, including leisure and team-building activities.</li>
    <li>Travel and accommodation arrangements.</li>
    <li>Special recognition events for award recipients.</li>
  </ul>
  <h2>3. Conference Coordination:</h2>
  <ul>
    <li>End-to-End event management from conception to conclusion.</li>
    <li>Registration and attedee management.</li>
    <li>Speaker coordination and program scheduling.</li>
    <li>Exhobition and sponsor management.</li>
  </ul>
  <h2>Exhibition Organization</h2>
  <ul>
    <li>Stall design and setup.</li>
    <li>Visitor regustratuib and engagement.</li>
    <li>Promotion and marketing of the exhibition.</li>
    <li>Logistics abd supply chain management.</li>
    </ul>
    <h2>Key Features:</h2>
    <ul>
    <li><strong>Dedicated Event Manager:</strong> Our seasoned professionals ensure every detail is looked after.</li>
<li><strong>Global Network:</strong> Access to an extensive list of venues, suppliers, and vendors across the globe.</li>
<li><strong>Customizable Packages:</strong> Services tailored to fit every budget and requirement.</li>
<li><strong>Latest Technology:</strong> Use of modern software and tools for registration, attendee tracking, and feedback collection.</li>
<li><strong>Sustainability:</strong> Efforts to minimize the environmental footprint of events.</li>

    </ul>

    </div>
   </div>
    );
}
export default Mice