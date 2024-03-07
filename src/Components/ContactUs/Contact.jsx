import React, { useState } from 'react'
import css from './Contact.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Contact() {

  const navigate = useNavigate();
  const [user, setUserr] = useState({
    name : "",
    email: "",
    mobile_number : "",
    city : "",
    feedback : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserr({
      ...user,
      [name]: value,
    });
  };
  
  
  const handle_contact_us = async (e) => {
    try{
    e.preventDefault();
  
    const res = await axios.post(
      `http://localhost:8080/api/contact_us`,
      {
        user: user,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    console.log("Responsee:", res.data);
    }
    catch(err){
      console.log("Error in submiting contact us : " , err);
    }
  };


  return (
      <>
        <div className={css.contactme}>
          
        <div className={css.companyinfo}>
                <h2>NURTURE EATS Quality Policy</h2>
                <p>
                NurtureEats believes in offering you the best only because you deserve
                it. This is reflected in the sourcing process of the ingredients,
                their selection, the manufacturing process, packaging and finally the
                distribution of the final product. Always keeping you in mind.
                </p>
                <p>
                ABC BUILDING, XYZ ROAD, Prayagraj Uttar Pradesh-211008.
                <br />
                Mon-fri 9.30AM to 5.30PM Feedback/Suggestions: someone@gmail.com
                </p>
            </div>
</div>
            <div className={css.mapandcont}>
            <div className={css.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115330.43462063557!2d81.80158454999999!3d25.40226375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709727998046!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style= {{ border: "0"}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className={css.contactsec}>
            <h1>Contact US</h1>
            <p>Give us your valuable Suggestions or Feedback using the form below:</p>
            <form onSubmit={handle_contact_us}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required  value={user.name}onChange={handleChange}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange}/>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required onChange={handleChange}/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required onChange={handleChange}/>
                
                <label htmlFor="Feedback">Feedback or Suggestion: </label>
                <textarea id="feedback" name="feedback" onChange={handleChange}/>

                <button type="submit">SUBMIT</button>
            </form>
            </div>
            </div>
        </>
  )
}

export default Contact;