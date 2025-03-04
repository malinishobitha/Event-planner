import React from 'react';
import LightingImage from './photos/Light.png';
function Lighting(){
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
<img src={LightingImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Lighting</h1>
    <h2>DESCRIPTION</h2>
    <h2>Package 1</h2>
    <h2>Package includes</h2>
<ul>
    <li>4 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 2</h2>
    <h2>Package includes</h2>
<ul>
    <li>8 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Smoke Machine</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 3</h2>
    <h2>Package includes</h2>
<ul>
    <li>8 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 4</h2>
    <h2>Package includes</h2>
<ul>
    <li>12 pcs Par LED 54x3 + Stand</li>
    <li>4 pcs Moving Head </li>
    <li>4 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    </div>
   </div>
    );
}
export default Lighting