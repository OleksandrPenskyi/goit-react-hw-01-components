import React from 'react-dom';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import errorImg from '../../images/errorImg.jpg';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={style.friendListItem}>
    <span className={isOnline ? style.online : style.offline}></span>
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: errorImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
