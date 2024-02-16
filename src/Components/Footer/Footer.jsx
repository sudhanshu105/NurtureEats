import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/Images/logo.png';
import Facebook from '../../assets/Images/facebook.png';
import Instagram from '../../assets/Images/Instagram.png';
import X from '../../assets/Images/X.png';
import Youtube from '../../assets/Images/youtube.png';
import Call from '../../assets/Images/call_icon.png';
import Message from '../../assets/Images/message_icon.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className={css.footer}>
        <div className={css.logo}><img src={Logo} alt="" /></div>
        <div className={css.enquiry}>
            <h2>ENQUIRY</h2>
            <ul className={css.enquiry_ul}>
                <li className={css.enquiry_li}>
                    <img src={Call} alt="" />
                    <h3>+91 9650169402</h3>
                </li>
                <li className={css.enquiry_li}>
                    <img src={Message} alt="" />
                    <h3>ankur.keshari@nurtureeats.in</h3>
                </li>
            </ul>
        </div>

        <div className={css.locate}>
            <h2>Locate Us</h2>
            <ul className={css.locate_ul}>
                <li className={css.locate_li}>Prayagraj, Uttar Pradesh</li>
                <Link to={'https://www.google.com/maps/place/Prayagraj,+Uttar+Pradesh/@25.4023959,81.7191832,12z/data=!3m1!4b1!4m6!3m5!1s0x398534c9b20bd49f:0xa2237856ad4041a!8m2!3d25.4358011!4d81.846311!16zL20vMDIwc2tj?entry=ttu'} target='_blank' className={css.locate_link}><li className={css.locate_li}>See On Map</li></Link>
            </ul>
        </div>

        <div className={css.follow}>
            <h2>Follow</h2>
            <ul className={css.follow_ul}>
                <li className={css.follow_li}>
                    <img src={Facebook} alt="" />
                    <h3>Facebook</h3>
                </li>
                <li className={css.follow_li}>
                    <img src={Instagram} alt="" />
                    <h3>Instagram</h3>
                </li>
                <li className={css.follow_li}>
                    <img src={X} alt="" />
                    <h3>X</h3>
                </li>
                <li className={css.follow_li}>
                    <img src={Youtube} alt="" />
                    <h3>Youtube</h3>
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
