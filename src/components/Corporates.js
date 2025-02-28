import React from "react";
import corporateImage from './photos/carporate.png';
function Corporate(){
    return(
         <div className='Container-Fluid'>
            <div className="card mb-3" style={{width: "95%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={corporateImage} class="img-fluid rounded-start" alt="corporate-image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">What's the key to hosting  a corporate event truly represent your brands? </p>
        <p className="card-text">Corporate events are your chance to showcase your value, foster relationship and making a last impression. But with the so many moving
          parts-venue selection, schedules, branding and guest experience-how do you ensure everything comes together seamlessly losing sight of your goals?    </p>
     <p className='card-text'>What if we told you we have the answer?</p>
     <p className='card-text'>At the core of every success corporate event as a team that know how to bring a vision to life with precision.  Our corporate Event management
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
         </div>
    );
}
export default Corporate