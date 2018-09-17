import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const BoardForm = ({
  handleSubmit,
  handleChange,
}) => (
  <div className={styles.container}>
  asda
    {/* <form onSubmit={handleSubmit}>
      <div
        className={styles.timelineBox}
      >
        <div className={styles.container}>
          <div className={styles.col3}>
          asd
            <img
            className={styles.imgResponsive}
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </form> */}
  </div>
)

BoardForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default BoardForm;