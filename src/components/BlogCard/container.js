import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';

const BlogCard = ({
  onMouseOver,
  more
}) => (
  <div className={styles.cardSize} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
    <div className={styles.makeCard}>
      <div className={styles.cardContainer}>
        {
          more ? <div className={styles.moreButton}><Button variant="contained" color="primary">more</Button></div> : null
        }
        
        <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
      </div>
      <div className={styles.cardTextBox}>
        <span className={styles.make_price}>$26</span>
        <strong className={styles.make_title}>Flower images</strong>
        <p>Flower images blue color</p>
      </div>
      <div className={styles.subTextBox}>
        <strong>SIZE</strong>
        <span>XS, S, M, L, XL, XXL</span>
        <strong>COLORS</strong>
        <div className={styles.color}>
          <div className={styles.c_blue}></div>
          <div className={styles.c_red}></div>
          <div className={styles.c_green}></div>
          <div className={styles.c_white}></div>
        </div>
      </div>
    </div>
  </div>
  

)
export default BlogCard;