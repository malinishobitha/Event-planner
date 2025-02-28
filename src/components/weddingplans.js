import React from "react";
import bannerImage from './photos/weddingplans.png';
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import expertise1 from './photos/post-wedding.png';
import expertise2 from './photos/image.png';
import expertise3 from './photos/image-1.png';
import expertise4 from './photos/image-2.png';
import expertise5 from './photos/image-3.png';
import expertise6 from './photos/image-4.png';
import expertise7 from './photos/image-5.png';
import expertise8 from './photos/image-6.png';
import expertise9 from './photos/image-7.png';
import expertise10 from  './photos/image-8.png';
import expertise11 from './photos/image-9.png';
import expertise12 from './photos/image-10.png';
function Weddingplans(){ 
    return (
        <div className="Container-Fluid">
            <div className="banner">
                <img src={bannerImage}alt="banner"/>
                <h1>A WEDDING IS ONLY ONE DAY,<br></br> BUT THE MEMORIES  LAST A LIFETIME </h1>
                </div>
                <div className="service-head">  
        <h1>OUR EXPERTISE</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <div className="expertise">
        <div className="expertise-cart">
      <img src={expertise1} alt="expertiseimage"/>
      <button> Wedding Films    </button>
      </div>
      <div className="expertise-cart">
      <img src={expertise2} alt="expertise-image"/>
      <button>Entertainment</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise3}alt="expertise-image"/>
      <button>Stage Setup</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise4}  alt="expertise-image"/>
      <button>Ring Ceremony</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise5}  alt="expertise-image"/>
      <button>Mehandhi Artist</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise6}  alt="expertise-image"/>
      <button>Invitation</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise7}  alt="expertise-image"/>
      <button>Bridal Makeup</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise8}  alt="expertise-image"/>
      <button>Themed Wedding</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise9}  alt="expertise-image"/>
      <button>Videographers</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise10}  alt="expertise-image"/>
      <button>Choreographers</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise11}  alt="expertise-image"/>
      <button>Candid Photo</button>
      </div>
      <div className="expertise-cart">
      <img src={expertise12}  alt="expertise-image"/>
      <button>Ceremony Venue</button>
      </div>
        </div>
</div>
    );
}
export default Weddingplans