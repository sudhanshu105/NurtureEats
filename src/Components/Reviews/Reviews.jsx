import React from 'react';
import Slider from 'react-slick';
import './sliderstyle.css';
import ReactStars from 'react-stars';
import css from './Reviews.module.css';
import imag from '../../assets/Images/avatar.jpg';



const reviewsData = [
  {
    id: 1,
    author: 'Sudhanshu',
    review: 'Premium Quality!!',
    // image:{imag},
    date: '11-04-2023',
    stars: 5,
  },
  {
    id: 2,
    author: 'Anurag',
    review: 'Very Good in taste and great for health',
    // image:{imag},
    date: '11-04-2023',
    
    stars: 4.5,
  },
  {
    id: 3,
    author: 'Harsh',
    review: 'Love this ! Definetley gonna try again !!',
    // image:{imag},
    date: '11-04-2023',
    stars: 4,
  },
  {
    id: 4,
    author: 'Rajat',
    review: `Great Taste light weight on stomach.. Definetly a must have!`,
    // image:{imag},
    date: '11-04-2023',
    stars: 5,
  },

];


const Reviews = () => {
    const screenWidth = window.innerWidth;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
    };
  
    if (screenWidth <= 1200) {
      sliderSettings.slidesToShow = 1;
    } else {
      sliderSettings.slidesToShow = 3;
    }

  return (
    <div className={css.outer}>
      <h2>Customer Reviews ( <span className={css.noformat}> {reviewsData.length} </span> )</h2>
      <Slider 
        {...sliderSettings}>

        {reviewsData.map(review => (
          <div key={review.id} 
          className={css.items}
        > 

            <ReactStars
            className={css.stars}
              count={5}
              size={30}
              color2={'#0047ba'}
              edit={false}
              value={review.stars}
            />
            <div className={css.profile}>
              <img src={imag} alt={`${review.author}'s Image`} />
              <p> <span className={css.namehead}> {review.author} </span> <br /> {`Reviewed on ${review.date} `}</p> </div>
              
            
         
            <p>{review.review}</p>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
