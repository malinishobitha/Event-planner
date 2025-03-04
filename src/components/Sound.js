import React from 'react';
import SoundImage from './photos/Sound System.png';
function Sound(){
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
<img src={SoundImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Sound System</h1>
    <h2>1000 Watt</h2>
    <h2>Package includes:</h2>
    <p></p>
 <ul>
    <li>2 unit Speaker Active 15 inch</li>
    <li>2 unit Wireless Mic</li>
    <li>1 unit Cable Mic</li>
    <li>1 unit Mixer + Operator</li>
    <li>Cabling System + Stand</li>
    
    </ul>
  <h2>2000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
<li>2 unit Subwoofer 18 Inch</li>
<li>2 unit Speaker Active</li>
<li>2 unit Monitor Stage</li>  
<li>2 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>
  <h2>5000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
<li>2 unit Mid Full Range Speaker</li>
<li>2 unit Subwoofer 18 Inch</li>
<li>3 unit Monitor Stage</li>  
<li>3 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>
  <h2>7000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
    <li>2 unit Mid Full Range Speaker</li>
<li>2 unit Subwoofer 18 Inch</li>
<li>2 unit Monitor Stage</li>  
<li>2 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>


    </div>
   </div>
    );
}
export default Sound