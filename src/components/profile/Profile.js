import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import errorImg from '../../images/errorImg.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.statsList}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

Profile.defaultProps = {
  location: 'No information',
  avatar: errorImg,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
