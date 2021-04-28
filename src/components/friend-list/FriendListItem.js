import React from "react-dom";
import style from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    {isOnline ? (
      <span className={style.online}></span>
    ) : (
      <span className={style.offline}></span>
    )}
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </>
);

export default FriendListItem;
