import React from 'react'
import css from './WhyBarley.module.css';
import Logo from '../../assets/Images/logo.png';
import Bowl from '../../assets/Images/bowl.png';

function WhyBarley() {
  return (
    <>
      <div className={css.upper_heading}>
        <h3>Why Barley?</h3>
      </div>

      <div className={css.history}>
        <div className={css.image}>
          <img src={Bowl} alt="" />
        </div>
        <div className={css.history_text}>
          <h3>HISTORY OF BARLEY</h3>
          <p>Barley has played a crucial role inhuman history as one of the earliestdomesticated crops. It served as adietary staple for ancientcivilizations, facilitated the transitionto settled societies, contributed totrade and economy, and heldreligious and cultural significance.Barley's versatility, nutritional value,use in brewing and traditionalmedicine have influenced variousaspects of human life and continueto shape culinary heritageworldwide</p>
        </div>
      </div>

      <div className={css.cards}>
        <div className={css.card}><img src={Logo} alt="" /></div>
        <div className={css.card}><img src={Logo} alt="" /></div>
        <div className={css.card}><img src={Logo} alt="" /></div>
        <div className={css.card}><img src={Logo} alt="" /></div>
        <div className={css.card}><img src={Logo} alt="" /></div>
        <div className={css.card}><img src={Logo} alt="" /></div>

      </div>

      <div className={css.nutriotion}>
        <h1 className={css.nutriotion_heading}>NUTRITIONAL CONTENT</h1>
        <div className={css.nutriotion_value}></div>
        <div className={css.nutriotion_value}></div>
      </div>

      <h2 className={css.ending}>Discover the Difference: NurtureEats, Where Barley Takes the Lead</h2>
    </>
  )
}

export default WhyBarley
