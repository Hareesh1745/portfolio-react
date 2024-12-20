import React from "react";
import './contact.css'
const Contact = () => {

return(
    <div>
    <div class="container">
  <div class="contact-section">
    <h2>Contact Information</h2>
    <div class="contact-details">
      <div class="contact-item">
        <div class="icon">
        </div>
        <div class="details">
          <h4>Chat to us</h4>
          <p>Chat with us for any help.</p>
          <p>hareesh812948@gmail.com</p>
        </div>
      </div>

      <div class="contact-item">
        <div class="icon">
    
        </div>
        <div class="details">
          <h4>Visit us</h4>
          <p>Visit our office HQ.</p>
          <p>Kariyavattom,Thiruvanathapuram</p>
        </div>
      </div>

      <div class="contact-item">
        <div class="icon">
   
        </div>
        <div class="details">
          <h4>Call us</h4>
          <p>Monday to Friday.</p>
          <p>8877665544</p>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section">
    <h2>For any queries</h2>
    <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
    <form>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Street" />
      <input type="number" placeholder="Phone No." />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Write Message"></textarea>
      <button type="button">Send Message</button>
    </form>
  </div>
</div>

   </div>
)
};

export default Contact;