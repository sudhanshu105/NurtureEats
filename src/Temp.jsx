import React from 'react'
import css from './Temp.module.css';
import pic from './assets/Images/mainimage.jpg';



function Temp() {
  return (
    <div className={css.grid_container}>
       
      <div className={css.item1}>
        <p className={css.normal}>This is some </p>
      </div>

      <div className={css.item2}>
      <img src={pic} alt="Your Image" />
      </div>

    </div>
  )
}

export default Temp