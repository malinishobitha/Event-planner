import React from 'react';
import cateringImage from './photos/Themed Catering.png';
function Catering(){
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
<img src={cateringImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Themed Catering</h1>
    <h2>DESCRIPTION</h2>
    <p>Each of these themes offers a unique dining experience, transporting guests to a different time or place, and making the evening truly unforgettable.  A comprehensive catering service for event planners provides customized menus, expert food preparation and presentation, attentive on-site service, and seamless logistics management, tailored to the specific needs of each event, ensuring a memorable culinary experience for guests while aligning with the overall event vision and budget.</p>
 <ul>
    <li><strong>Hollywood Glamour</strong></li>
    <li><strong>Mediterranean Mirage</strong></li>
    <li><strong>Retro Radiance</strong></li>
    <li><strong>Tropical Paradise</strong></li>
    <li><strong>Masquerade Ball</strong></li>
    <li><strong>Nautical Nights</strong></li>
    <li><strong>Midnight in Paris</strong></li>
    <li><strong>Safari Supper</strong></li>
    </ul>
  <h2>Key points to highlight in a catering services description from MN Event Planners:</h2>
  <ul>
<li><h2>Menu Customization:</h2>Ability to create unique menus based on dietary restrictions, cultural considerations, and client preferences, inluding options for hors d'oeuvres, buffets, plated meals, and dessert spreads.</li>
<li><h2>Professional Staff:</h2>Highly trained waitstaff and culinary team to deliver exceptional service and food quality throughout the event </li>
<li><h2>Flexible Options:</h2>Catering to various event types like weddings, corporate  gathering, conferences, birthhday parties, and more.</li>  
<li><h2>On-Site Management:</h2>Coordination with event planners to ensure smooth food service execution, including timing, presentation, and any special requests.</li>  
<li><h2>Logistics Expertise:</h2>Handling food delivery, setup, breakdown, and proper sanitation procedures.</li>
<li><h2>Budget-Friendly Solutions</h2>Providing diverse menu options to fit different budget constraints while maintaining quality standards.</li>  
  </ul>

    </div>
   </div>
    );
}
export default Catering