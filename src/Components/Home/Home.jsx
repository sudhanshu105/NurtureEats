import React from 'react'
import Logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Barl from '../../assets/Images/barley.png';

function Home() {
  return (
    <>
    <div className={css.logo_image}>
        <div className={css.image}>
            <img src={Logo} alt="" /><br></br>
        </div>
        
    </div>
    
    <div className={css.tag}>
    <h2>NurtureEats</h2>
    <h4>
      #FOODforHEALTH
    </h4>
    </div>

    <div className={css.Barley}>
      <img src={Barl} alt="" />
    </div>
    </>
  )
}

export default Home
