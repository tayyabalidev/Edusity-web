import './Contact.css'
import React from 'react'
import mail_icon from '../../../edusity_assets/mail-icon.png'
import phone_icon from '../../../edusity_assets/phone-icon.png'
import location_icon from '../../../edusity_assets/location-icon.png'
import msg_icon from '../../../edusity_assets/msg-icon.png'
import white_arrow from '../../../edusity_assets/white-arrow.png'
function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "578f074b-915a-4b73-a3ed-ea704d7e1d01");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contacts'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} className='msg-icon'/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} className='mail-icon'/>Contact@GreatStack.dev </li>
            <li><img src={phone_icon} className='phone-icon'/>+1 123-456-7890 </li>
            <li><img src={location_icon} className='location-icon'/>77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name'required/>
            <label>Phone Number</label>
            <input type='text' name='phone' placeholder='Enter your mobile number'required/>
            <label>Your Email</label>
            <input type='email' name='email' placeholder='Enter your Email'required/>
            <label>Write your messages here</label>
            <textarea name='message' rows="4" placeholder='Enter your message' required></textarea>
            <button type='submit' className='cta3'>Submit<img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
// 578f074b-915a-4b73-a3ed-ea704d7e1d01