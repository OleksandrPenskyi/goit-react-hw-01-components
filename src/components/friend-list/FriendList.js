import React from 'react-dom';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

export default FriendList;
