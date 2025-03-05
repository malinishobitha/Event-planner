import React, {useState} from 'react';
import stageImage from './photos/Stage Decoration.png';
function Stage(){
    const [showForm, setShowForm] = useState(false);
     const [formData, setFormData] = useState({
       name: "",
       mobile: "",
       email: "",
       date: "",
       location: "",
       guests: "",
       details: "",
       packages: [],
     });
   
     const handleChange = (e) => {
       const { name, value, type, checked } = e.target;
       if (type === "checkbox") {
         setFormData((prev) => ({
           ...prev,
           packages: checked
             ? [...prev.packages, value]
             : prev.packages.filter((pkg) => pkg !== value),
         }));
       } else {
         setFormData((prev) => ({ ...prev, [name]: value }));
       }
     };
   
     const handleSubmit = (e) => {
       e.preventDefault();
       if (!formData.name || !formData.mobile || !formData.email) {
         alert("Please fill out all required fields.");
         return;
       }
       console.log("Form Data:", formData);
       alert("Form Submitted Successfully!");
       setShowForm(false);
     };
   
     return (
       <div>
         {/* Navbar */}
        
         <nav class="navbars bg-body-tertiary">
         <div className="container-fluid">
             <form className="d-flex" role="search">
               <input
                 className="form-control me-2"
                 type="search"
                 placeholder="Search"
                 aria-label="Search"
               />
               <button
                 className="btn btn-outline-success"
                 type="button"
                 onClick={() => setShowForm(true)}
               >
                 Get A Quote
               </button>
             </form>
         </div>
         </nav>
   
         {/* Form Popup */}
         {showForm && (
           <div className="quote-form">
             <div className="form-container">
               <button className="close-btn" onClick={() => setShowForm(false)}>
                 &times;
               </button>
               <h4>Get A Quote</h4>
               <form onSubmit={handleSubmit}>
                 <div className="information">
                   <input
                     type="text"
                     name="name"
                     className="form-control"
                     placeholder="First & Last Name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                   />
                   <input
                     type="tel"
                     name="mobile"
                     className="form-control"
                     placeholder="Mobile"
                     value={formData.mobile}
                     onChange={handleChange}
                     required
                   />
                   <input
                     type="email"
                     name="email"
                     className="form-control"
                     placeholder="Email Id"
                     value={formData.email}
                     onChange={handleChange}
                     required
                   />
                   <input
                     type="text"
                     name="date"
                     className="form-control"
                     placeholder="Wedding or Special Event Date"
                     value={formData.date}
                     onChange={handleChange}
                   />
                   <input
                     type="text"
                     name="location"
                     className="form-control"
                     placeholder="Event Location (or Considering)"
                     value={formData.location}
                     onChange={handleChange}
                   />
                   <input
                     type="text"
                     name="guests"
                     className="form-control"
                     placeholder="How many guests are you expecting?"
                     value={formData.guests}
                     onChange={handleChange}
                   />
                 </div>
   
                 <div className="package-inform">
                   <label>Package Interest In? (Select all that apply)</label>
                   <div className="checkbox-group">
                     {["Full Planning + Design - Wedding", "Custom Quote Celebration", "The Bubbly Bar", "Unsure, Let's Chat"].map((pkg) => (
                       <label key={pkg}>
                         <input type="checkbox" name="packages" value={pkg} onChange={handleChange} />
                         {pkg}
                       </label>
                     ))}
                   </div>
                 </div>
   
                 <div className="more-details">
                   <label>More details? Tell us more about how we can help!</label>
                   <textarea
                     name="details"
                     className="form-control"
                     rows="3"
                     value={formData.details}
                     onChange={handleChange}
                   ></textarea>
                 </div>
   
                 <button type="submit" className="btn btn-primary w-100">
                   Submit
                 </button>
               </form>
             </div>
           </div>
         )}
   
<img src={stageImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Stage Decoration</h1>
    <h2>DESCRIPTION</h2>
    <p>A "Stage decoration service" for event planners refers to a specialized services that designs and executes visually appealing stage setups using various decorative elements like backdrops, lighting, floral arrangements, draping, props, and furniture, tailored to the specific theme and aesthetic of an event, trasnsforming the stage into a captivating focal point for the audience.</p>

 <h2>Key points about stage decoration services:</h2>
 <ul>
    <li><h2>Custom design:</h2>Creating unique stage designs that align with the event theme, whether it's corporate gala, wedding, concert or conference.</li>
    <li><h2>Visual impact:</h2>Utilizing various elements to enhance the stage's visual appeal, including color schemes, texturess, and lighting effects.</li>
    <li><h2>Professional installattion:</h2>Expert setup and breakdown of stage decorations, ensuring a pokished look throughout the event.</li>
    <li><h2>Flexibility:</h2>Adapting to different venue sizes and stage configurations</li>
    <li><h2>Collaboration:</h2>Working closely with event planners to understand their vision and incorporate necessary branding or specific design elements.</li>

 </ul>
 <h2>Typical services included in stage decoration:</h2>
 <ul>
    <li><h2>Backdrop creation:</h2>Designing and insalling custom backdrops using fabric, printed graphics, or other materials.</li>
    <li><h2>Lighting design:</h2>Selecting and positioning lighting fixtures to create desird ambiance and highlight key elements on stage.</li>
    <li><h2>Floral arrangements:</h2>Incorporating floral designs to enhance the stage's aesthetic.</li>
 <li><h2>Draping:</h2>Using fabric to cover stage elements or create a visually appealing backdrop.</li>
 <li><h2>Furniture placement:</h2>Arranging chairs, tables, and other furniture to create a functional and visually pleasing stage layout.</li>
 <li><h2>Prop styling:</h2>Selecting and placing props that complement the event theme.</li>
 
 </ul>
 <h2>Benefits of using a stage decoration service:</h2>
 <ul>
    <li><h2>Professional expertise:</h2>Acces to skilled designers and technicians who can create a visually stunning stage.</li>
    <li><h2>Time-saving:</h2>Reduces the burden of sourcing and coordinating decoration elements on the event.</li>
    <li><h2>Elevated event experience:</h2>Creattes a memorable and immersive experience for attendees.</li>
 </ul>
    </div>
   </div>
    );
}
export default Stage