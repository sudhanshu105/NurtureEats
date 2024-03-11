import React from 'react'
import css from './Faq.module.css';
import pic from '../../assets/Images/bowl.png';

function Faq() {


  return (
    <div className={css.outer}><h1>FAQS</h1>
        <div className={css.internal_box}>
            <div className={css.text}
            >
                <hr />
                <p className={css.heading}
                >01: Is it gluten-free? </p>
                <p className={css.content}>Properly stored, our products maintain freshness for 6 months.</p>
                <hr />

                <p className={css.heading} >02: Shelf life?</p>
                <p className={css.content} >Properly stored, our products maintain freshness for 6 months. </p> <hr />
            </div>

            <div className={css.imageContainer}>
                <img src={pic} alt="barley" />
            </div>
        </div>
    </div>
  )
}

export default Faq