import React from 'react'
import Logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

function Home() {
  return (
    <>
    <div className={css.logo_image}>
        <div className={css.image}>
            <img src={Logo} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
