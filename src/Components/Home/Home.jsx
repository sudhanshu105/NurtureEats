import React from 'react'
import Logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Health from '../../assets/Images/health.png';
// import FlippableTile from './FlippableTile';

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

    <div className={css.health}>
      <img className={css.tiles} src={Health} alt="" />
      <img className={css.tiles} src={Health} alt="" />
      <img className={css.tiles} src={Health} alt="" />
      <img className={css.tiles} src={Health} alt="" />

        {/* <FlippableTile image={Health} />
        <FlippableTile image={Health} />
        <FlippableTile image={Health} /> */}
      
    </div>
    </>
  )
}

export default Home
