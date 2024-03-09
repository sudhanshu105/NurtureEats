import React from 'react'
import css from './Products.module.css';
import Package from '../../assets/Images/package.png';


function Products() {
  return (
    <div className={css.firstbox}>
      <div className={css.content}>
        <div className={css.headline}>
          <h3>ELEVATE YOUR WELLNESS WITH US</h3>
          <p>Explore our Wide Range of Products</p>
        </div>

        <div className={css.health}>
          <img className={css.tiles} src={Package} alt="" />
          <img className={css.tiles} src={Package} alt="" />
          <img className={css.tiles} src={Package} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Products