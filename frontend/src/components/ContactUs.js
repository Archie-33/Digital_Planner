import {useRef} from "react"
import emailjs from '@emailjs/browser';
import "./ContactUs.css"

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k1p9tqa', 'template_ash1cyv', form.current, 'sI5_NFsks0Yy55YVw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    
    return(
      <section>
        <div className="body1">
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
          <form ref={form} onSubmit={sendEmail}>
            <div class="input-box">
              <input type="text" placeholder="Enter your name" name="user_name" required/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email" name="user_email" required/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter message subject" name="subject" required/>
            </div>
            <div class="input-box message-box">
              <textarea name="message" placeholder="Enter your message"></textarea>
            </div>
            <div class="button">
              <button type="submit" className="btn btn-outline-secondary">Send Message</button>
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>
      </section>


                
    )
}
export default ContactUs;