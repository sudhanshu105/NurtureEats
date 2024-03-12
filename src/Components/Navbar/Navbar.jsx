import React, { useRef } from 'react';
import css from './Navbar.module.css';
import {
  Link
} from "react-router-dom";
import Logo from '../../assets/Images/logo.png'

function Navbar() {

  return (
    <>
      <div className={css.nav}>
      <div className={css.first_nav}>
        <Link to='/'><img src={Logo} alt="" /></Link>
         <h3 className={css.navhead}>NurtureEats</h3>
      </div>
      
      <div className={css.second_nav}>
        <ul className={css.ul}>
          <Link className={css.mylink} to={'/'}><li className={css.li}>Home</li></Link>
          <Link className={css.mylink} to={'/products'}><li className={css.li}>Products</li></Link>
          <Link className={css.mylink} to={'/quality'}><li className={css.li}>Quality Control</li></Link>
          <Link className={css.mylink} to={'/about'}><li className={css.li}>About Us</li></Link>
          <Link className={css.mylink} to={'/contact'}><li className={css.li}>Contact Us</li></Link>

            
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
