import React from 'react-dom';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

export default FriendListItem;
