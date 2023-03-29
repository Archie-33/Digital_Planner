import React from "react"
import "./ContactUs.css"

const ContactUs = () => {
    
    return(
        <div className="body">
        <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Lucknow, 226012</div>
              <div class="text-two">Aashiyana Colony, near Aalambagh</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+91 9898935647</div>
              <div class="text-two">+91 9634345678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">archiebhartari@gmail.com</div>
              <div class="text-two">info.works@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">SEND US A MESSAGE</div>
            <p>If you have any work related queries or any complaints, you can send us a message here. It'll be our pleasure to help you.</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div class="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div class="button">
              <input type="button" value="Send Now"/>
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>


                
    )
}
export default ContactUs;