import React from 'react';
import Moment from 'components/Moment';
import styles from './styles.scss';

const NotifyBody = ({
  boards
}) => (
  <div className={styles.notifyBody}>
    {
      boards.map((notify, i) => (
        <div className={styles.notifyItem} key={i}>
          <div className={styles.notifyFirst}>
            <img src={notify.profileImage} className="img-circle" width="25" height="25"/>
          </div>
          <div className={styles.notifyMiddle}>
            <span>
              {notify.nickname}님께서
              {
                notify.history === '' ? null : " 사진과 함께 "
              }새로운 글을 올렸습니다.
            </span>
          </div>
          <div className={styles.notifyLast}>
            <Moment date={notify.date}/>
          </div>
        </div>
      ))
    }
  </div>
)

export default NotifyBody;