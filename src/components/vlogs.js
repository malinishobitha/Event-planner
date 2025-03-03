import React from "react";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import vlogImage from './photos/v1.png';
import vlogImage1 from './photos/v2.png';
import vlogImage2 from './photos/v3.png';
import vlogImage3 from './photos/v4.png';
import vlogImage4 from './photos/v5.png';
import vlogImage5 from './photos/v6.png';
import vlogImage6 from './photos/v7.png';
import vlogImage7 from './photos/v8.png';
import vlogImage8 from './photos/v9.png';
import vlogImage9 from './photos/v10.png';
import vlogImage10 from './photos/v11.png';



function Vlogs() { 
  return (
    <div className="Container-Fluid">
    <div className="service-head">  
        <h1>Behind-the-Scene</h1>
        <img src={decoration} alt="decoration" />
        <h3>BEHIND THE SCENES: CORPORATE EVENTS</h3>
        </div>
        <div className="scene-images">
   <img src={vlogImage}alt='vlogimages'/>
   <img src={vlogImage}alt='vlogimages'/>
   <img src={vlogImage1}alt='vlogimages'/>
    </div>
    <div className="service-head">  
    <h3>BEHIND THE SCENES: WEDDING DAY DISASTERS</h3>
    </div>
    <div className="scene-images">
   <img src={vlogImage2}alt='vlogimages'/>
   <img src={vlogImage3}alt='vlogimages'/>
   <img src={vlogImage4}alt='vlogimages'/>
    </div>
    <div className="service-head">  
    <h3>BEHIND THE SCENES: EVENT PLANNERS POINT</h3>
    </div>
    <div className="scene-images">
   <img src={vlogImage5}alt='vlogimages'/>
   <img src={vlogImage6}alt='vlogimages'/>
   <img src={vlogImage7}alt='vlogimages'/>
    </div>
    <div className="service-head">  
    <h3>BEHIND THE SCENES: EVENT PLANNERS POINT</h3>
    </div>
    <div className="scene-images">
   <img src={vlogImage8}alt='vlogimages'/>
   <img src={vlogImage9}alt='vlogimages'/>
   <img src={vlogImage10}alt='vlogimages'/>
    </div>
</div>
  );
}
export default Vlogs