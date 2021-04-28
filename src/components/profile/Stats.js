import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Stats = ({ followers, views, likes }) => (
  <ul className={styles.statsList}>
    <li className={styles.statsItem}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
);

Stats.defaultProps = {
  followers: 'No information',
  views: 'No information',
  likes: 'No information',
};

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;
