import React from 'react';
import TourImage from './photos/Tour.png';
function Tour(){
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
<img src={TourImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Tour Organiser</h1>
    <h2>DESCRIPTION</h2>
    <p>Welcome to MN Event tour Organizer Services! Our passion is curating unforgettable journeys, bringing together like-minded adventurers, and revealing the hidden gems of our planet. With over a decade of expertise in tailoring experiences for the curious traveler, we pride ourselves on being more than just tour organizers - we are your travel storytellers!</p>
 <h2>Why Choose Bali tour organizer?</h2>
 <p><strong>1. Personalized Touch:</strong>Every tour is crafted keeping our travelers in mind. Tell us your dream holiday, and we'll make it come true.</p>
 <p><strong>2. Expertise at Hand:</strong>Our local guides have in-depth knowledge about the history, culture, and secrets of the destinations.</p>
 <p><strong>3. Safety First:</strong>Our top priority is the safety and well-being of our travelers.</p>
 <p><strong>4. Eco-Conscious Journeys:</strong>We believe in sustainable tourism, ensuring minimal impact on the environment and maximizing benefits for local communities</p>
   <h2>Our Services:</h2>
   <p><strong>1. Guided Group Tours:</strong>Travel with a group of like-minded adventurers, explore new  destinations, and forge lifelong memories</p>
   <p><strong>2. Customized Private Tours:</strong>Craft your itinerary, choose your accommodation, and travel at your own pace.</p>
   <p><strong>3. Adventure Expenditions:</strong>Fot the adrenaline junkies - from mountain trekking to deep-sea diving, we've got it all.</p>
   <p><strong>4. Cultural Immersions:</strong>Dive deep into local traditions, cuisines, and festivites. Experience the world like a locla!</p>
   <p><strong>5. Corporate Retreats:</strong>Team building in the wilderness or brainstorming by the beach? We've got you covered.</p>
    </div>
   </div>
    );
}
export default Tour