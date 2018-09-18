import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const RightArrow = ({
  goToNextSlide,
  property,
  properties
}) => (
  <button 
    className={styles.nextArrow}
    onClick={goToNextSlide}
    disabled={property === properties.length-1}
  >
    <img src={require("images/next_arrow.png")}/>
  </button>
);
RightArrow.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  properties: PropTypes.array.isRequired
}
const LeftArrow = ({
  goToPrevSlide,
  property
}) => (
  <button 
    className={styles.backArrow}
    onClick={goToPrevSlide}
    disabled={property === 0}
  >
    <img src={require("images/back_arrow.png")}/>
  </button>
);
LeftArrow.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
}
const ArrowBtnWrap = ({
  goToNextSlide,
  goToPrevSlide,
  property,
  properties
}) => (
  <div className={styles.arrorBtnWrap}>
    <RightArrow 
      goToNextSlide={goToNextSlide}
      property={property}
      properties={properties}
    />
    <LeftArrow 
      goToPrevSlide={goToPrevSlide}
      property={property}
    />
  </div>
)
ArrowBtnWrap.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  properties: PropTypes.array.isRequired
}

export default ArrowBtnWrap;