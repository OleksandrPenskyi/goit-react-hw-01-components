import React from 'react';

const Description = ({ name, tag, location, avatar }) => (
  <div className="description">
    <img src={avatar} alt="Аватар пользователя" className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);

export default Description;
