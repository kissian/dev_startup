import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SlideCardItem = ({
  index, picture, city, address, bedrooms, bathrooms, carSpaces
}) => (
  <div id={`card-${index}`} className={styles.card}>
    <img src={picture} alt={city} />
    <div className={styles.details}>
      <span className={styles.index}>{index+1}</span>
      <p className={styles.location}>
          {city}<br />
          {address}
      </p>
      <ul className={styles.features}>
          <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
          <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
          <li className="icon-car">{carSpaces} <span>parking spots</span></li>
      </ul>
    </div>
  </div>
);

SlideCardItem.propTypes = {
  index: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  carSpaces: PropTypes.number.isRequired,
}

export default SlideCardItem;