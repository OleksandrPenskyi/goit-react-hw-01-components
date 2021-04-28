import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import errorImg from '../../images/errorImg.jpg';

const Description = ({ name, tag, location, avatar }) => (
  <div className={styles.description}>
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Description.defaultProps = {
  avatar: errorImg,
  location: 'No information',
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Description;
