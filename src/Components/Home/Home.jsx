import React from 'react'
import Logo from '../../assets/Images/mainimage.jpg';
import Package from '../../assets/Images/package.png';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Health from '../../assets/Images/health.png';
// import FlippableTile from './FlippableTile';

function Home() {
  return (
    <div className={css.outer}>
    <div className={css.logo_image}>
        <div className={css.image}>
            {/* <img src={Logo} alt="" /><br></br> */}
        </div>
        
    </div>

    <div className={css.tag}>
    <h2>NurtureEats</h2>
    <h4>
      #FOODforHEALTH
    </h4>
    </div>

    <div className={css.headline}>
      <h3>ELEVATE YOUR WELLNESS WITH US</h3>
      <p>Embrace a healthier lifestyle with our nutrient-rich barley flour, your path to wellness starts here.</p>
    </div>

    <div className={css.health}>
      <img className={css.tiles} src={Package} alt="" />
      <img className={css.tiles} src={Package} alt="" />
      <img className={css.tiles} src={Package} alt="" />
      {/* <img className={css.tiles} src={Package} alt="" /> */}

      
    </div>
</div>

  )
}

export default Home
