import React from 'react-dom';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={style.friendListItem} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
