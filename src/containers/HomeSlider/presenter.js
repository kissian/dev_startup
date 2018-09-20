import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import SlideCardItem from 'components/SlideCardItem';
import ArrowsBtn from 'components/ArrowsBtn';

const HomeSlider = ({
  properties,
  property,
  goToNextSlide,
  goToPrevSlide
}) => (
  <div className={styles.row}>
    <div className={styles.cardPage}>
      <div className={styles.col}>
        <div className={`${styles.cardsSlider} ${styles.activeSlide}${property.index}`}>
          <div 
            className={styles.cardsSliderWrapper} 
            style={{
              'transform': `translateX(-${property.index*(100/properties.length)}%)`
            }}
          >
            {
              properties.map(e => (
                  <SlideCardItem 
                    key={e._id}
                    index={e.index}
                    picture={e.picture}
                    city={e.city}
                    address={e.address}
                    bedrooms={e.bedrooms}
                    bathrooms={e.bathrooms}
                    carSpaces={e.carSpaces}
                  />
              ))
            }
          </div>  
        </div>
      </div>
    </div>
    <ArrowsBtn
      properties={properties}
      property={property}
      goToNextSlide={goToNextSlide}
      goToPrevSlide={goToPrevSlide}
    />
  </div>
)

// 

HomeSlider.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    carSpaces: PropTypes.number.isRequired,
  })).isRequired,
  property: PropTypes.object.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired
}

export default HomeSlider;