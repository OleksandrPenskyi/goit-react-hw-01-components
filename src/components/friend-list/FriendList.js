import React from "react-dom";
import FriendListItem from "./FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map((friend) => (
      <li className={style.friendListItem} key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
