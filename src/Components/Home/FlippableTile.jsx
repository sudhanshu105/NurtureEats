
import React, { useState } from 'react';
import css from './FlippableTile.module.css'; 

const FlippableTile = ({ image }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleFlip = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  const isFlipped = clickCount % 2 !== 0;

  return (
    <div className={`${css.flipContainer} ${isFlipped ? css.flipped : ''}`} onClick={handleFlip}>
      <div className={css.flipper}>
        {/* Front Content */}
        <div className={css.front}>
          <img className={css.tiles} src={image} alt="" />
        </div>
        {/* Back Content (Text) */}
        <div className={css.back}>
          <p>
          Your text goes here
          Your text goes here
          Your text goes here
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlippableTile;
