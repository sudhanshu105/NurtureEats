import React from 'react'
import css from './WhyBarley.module.css';
import Logo from '../../assets/Images/logo.png';
import Bowl from '../../assets/Images/bowl.png';
import heartimg from '../../assets/Images/heart.jpg';
import diabetesimg from '../../assets/Images/diabetic.jpg';
import digestionimg from '../../assets/Images/stomach.jpg';
import weightimg from '../../assets/Images/weightcontrol.jpg';
import vitamin from '../../assets/Images/vitamin.jpg';
import antioxidents from '../../assets/Images/antioxi.jpeg';

function WhyBarley() {
  return (
    <>
      <div className={css.upper_heading}>
        <h1>Why Barley?</h1>
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
        <div className={css.nutriotion_value}>
        
        <div className={css.tablebox}>

          <table className={css.tabl}>

            <th className={css.thhead} colSpan="3"> Macronutrients </th>

            <tr>
              <td className={css.tablecon}>  </td>
              <th className={css.tablecon}> Wheat Flour </th>
              <th className={css.tablecon}>Pearled Barley Flour</th>
            </tr>

            <tr>
              <th className={css.tablecon}>Calorie</th>
              <td className={css.tablecon}>Hello</td>
              <td className={css.tablecon}>Hello</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Carbs</th>
              <td className={css.tablecon}>Hello</td>
              <td className={css.tablecon}>Hello</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Protein</th>
              <td className={css.tablecon}>Hello</td>
              <td className={css.tablecon}>Hello</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Fat</th>
              <td className={css.tablecon}>Hello</td>
              <td className={css.tablecon}>Hello</td>
            </tr>

            <tr>
              <th className={css.tablecon}>Fiber</th>
              <td className={css.tablecon}>Hello</td>
              <td className={css.tablecon}>Hello</td>
            </tr>

          </table>
          </div>

        </div>

        <div className={css.nutriotion_value}>
        <div className={css.tablebox}>

        <table className={css.tablesecond}>

          <th className={css.thhead} colSpan="3"> Macronutrients </th>

          <tr>
            <td className={css.tablecon}>  </td>
            <th className={css.tablecon}> Wheat Flour </th>
            <th className={css.tablecon}>Pearled Barley Flour</th>
          </tr>

          <tr>
            <th className={css.tablecon}>Manganese</th>
            <td className={css.tablecon}>34 % of the DV </td>
            <td className={css.tablecon}>58 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Copper</th>
            <td className={css.tablecon}>20 % of the DV </td>
            <td className={css.tablecon}>47 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Zinc</th>
            <td className={css.tablecon}>8 % of the DV </td>
            <td className={css.tablecon}>19 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Phosphorus</th>
            <td className={css.tablecon}>8 % of the DV </td>
            <td className={css.tablecon}>18 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Iron</th>
            <td className={css.tablecon}>5 % of the DV </td>
            <td className={css.tablecon}>14 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Magnesium</th>
            <td className={css.tablecon}>6 % of the DV </td>
            <td className={css.tablecon}>19 % of the DV</td>
          </tr>

          <tr>
            <th className={css.tablecon}>Potassium</th>
            <td className={css.tablecon}>2 % of the DV </td>
            <td className={css.tablecon}>6 % of the DV</td>
          </tr>

        </table>
        </div>
        </div>
      </div>

      <h2 className={css.healthhead}>Health Benefits</h2>

      <div className={css.health}>

        <div className={css.heart}>
        <img src={heartimg} alt="" />

        <p>
          <h3>IMPROVES HEART HEALTH</h3>
        </p>
        </div>

        <div className={css.diabetes}>
        <p>
          <h3>STABILIZED BLOOD SUGAR AND DIABETES</h3>
        </p>
        <img src={diabetesimg} alt="" />
        </div>

        <div className={css.weight}>
        <img src={weightimg} alt="" />
        <p>
          <h3>WEIGHT CONTROL</h3>
        </p>
        </div>

        <div className={css.digestion}>
        <p>
          <h3>PROMOTING DIGESTIVE HEALTH</h3>
        </p>
        <img src={digestionimg} alt="" />
        </div>

        <div className={css.vitamins}>
        
        <img src={vitamin} alt="" />
        <p>
          <h3>RICH IN VITAMIN AND MINERALS</h3>
        </p>
        </div>

        <div className={css.antioxi}>
        <p>
          <h3>ANTIOXIDENT PROPERTIES</h3>
        </p>
        <img src={antioxidents} alt="" />
        </div>

      </div>

      <h2 className={css.ending}>Discover the Difference: NurtureEats, Where Barley Takes the Lead</h2>
    </>
  )
}

export default WhyBarley
