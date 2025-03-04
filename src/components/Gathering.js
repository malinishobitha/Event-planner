import React from 'react';
import gatheringImage from './photos/Company Gathering.png';
function Gathering(){
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
<img src={gatheringImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Company Gatering</h1>
    <h2>DESCRIPTION</h2>
    <p>MN Event Planner is specializes in orchestrating memorable and impactful company gatherings. Our goal is to create events that not only foster team unity but also reflect the company's values and vision. From small business retreats to grand corporate celebration, we provide solutions that match your unique needs.</p>
  <h2>Services Offerings:</h2>
  <h2>1. Venue Selection and Booking:</h2>
  <ul>
    <li>Scouting and recommending venues thatresonate with the company's image.</li>
    <li>Negotiating rates and ensuring all logistical requirements are met.</li>
  </ul>
  <h2>2. Theme Development and Decor:</h2>
  <ul>
    <li>Creating themes that align with the company's objectives.</li>
    <li>Sourcing and setting up decorations, audio-visual equipment, and props.</li>
  </ul>
  <h2>3. Itinerary and Schedule Planning</h2>
  <ul>
    <li>Designing a balanced mix of leisure, team-building, and official events.</li>
    <li>Time management to ensure smooth transitions between activities.</li>
  </ul>
  <h2>4. Catering and Refreshments:</h2>
  <ul>
    <li>Collaborating with trusted caterers to provide a range of food options.</li>
    <li>Organizing cocktail hours, gala dinners, or buffet spreads as required.</li>
    </ul>
    <h2>Entertainment and Activities:</h2>
    <ul>
    <li>Curating a selection of entertainers, from bands to keynote speakers</li>
<li>Organizing workshops, games, and team-bilding exrcises.</li>

    </ul>
<h2>6. Transportation and Accommodation:</h2>
<ul>
    <li>Coodinating transportation services for attendees.</li>
    Arranging accommmodation of out-of-town guests or multi-day events.
</ul>
<h2>7. Event Documentation:</h2>
<ul>
<li>Professional Photography and Videography services to capture the event.</li>
<li>Providing post-event materials such as videos, photos, and event summaries.</li>
   </ul>
   <h2>8. Safety Security:</h2>
   <ul>
    <li>Ensuring venue safety protocols are met.</li>
    <li>Arranging security personnel if required.</li>
   </ul>
    </div>
   </div>
    );
}
export default Gathering