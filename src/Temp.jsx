import React from 'react'
import css from './Temp.module.css';
import pic from './assets/Images/mainimage.jpg';
import back from './assets/Images/barleyfields.jpg';


function Temp() {
  return (
      <div className={css.outerbox}>

          <div className={css.grid_container}>
              <div className={css.item1}>
                  <p className={css.heading}>Elevate Your Health Today With NurtureEats</p>
                  <div className={css.subbox}>
                      <h3>Nutrition Packed</h3>
                      Rich in essential vitamins and minerals
                  </div>
              </div>

              <div className={css.item2}>
                  <img src={pic} alt="Your Image" />
              </div>
              <div className={css.item3}>
                  <p className={css.normal}><span className={css.homehead}>100+ </span> Happy Homes </p>

                  <img src={back} alt="fields" />

                  <div className={css.bottombox}>

                    <h3>Pure Ingredients</h3>
                    Sourced from the finest organic farms.
                    </div>
              </div>
          </div>
      </div>
  )
}

export default Temp