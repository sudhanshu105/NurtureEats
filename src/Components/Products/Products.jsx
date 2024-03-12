import React from 'react'
import css from './Products.module.css';
import picture from '../../assets/Images/toast.jpg';


function Products() {
  return (
    <div className={css.firstbox}>
      <div className={css.content}>
        <div className={css.headline}>
          <h3>ELEVATE YOUR WELLNESS WITH US</h3>
          <h2>Our Key Products</h2>
          <div className={css.maincontent}>
            <div className={css.firstText}>

              <div className={css.uppertext}>
                <span className={css.heading}> Barley Flour</span>
                <p>An essential for experimental bakers and health-conscious kitchens.</p>
              </div>
              <div className={css.bottomtext}>
                <span className={css.heading}> Multigrain Flour</span>
                <p>An essential for experimental bakers and health-conscious kitchens.</p>
              </div>

            </div>
            <div className={css.image}>
              <img src={picture} alt="pic" />
            </div>
            <div className={css.lastText}>

            <div className={css.uppertext}>
                <span className={css.heading}> Recipe Ideas</span>
                <p>Inspire your culinary journey with versatile flour uses.</p>
              </div>
              <div className={css.bottomtext}>
                <span className={css.heading}> Farm to Table</span>
                <p>Traceable origins for guaranteed purity and quality.</p>
              </div>

            </div>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Products