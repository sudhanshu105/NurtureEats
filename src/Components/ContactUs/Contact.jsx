import React from 'react'
import css from './Contact.module.css';

function Contact() {
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
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
                
                <label htmlFor="Feedback">Feedback or Suggestion: </label>
                <textarea id="feedback" name="feedback" required />

                <button type="submit">SUBMIT</button>
            </form>
            </div>
            </div>
        </>
  )
}

export default Contact;