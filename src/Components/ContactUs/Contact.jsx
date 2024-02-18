import React from 'react'
import css from './Contact.module.css';

function Contact() {
  return (
    <>
    
        <div className={css.Contact-me}>
            <h1>Contact US</h1>
            <p>Give us your valuable Suggestions or Feedback using the form below:</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
                <button type="submit">SUBMIT</button>
            </form>
            <div className={css.company-info}>
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
  
    </>
  )
}

export default Contact;