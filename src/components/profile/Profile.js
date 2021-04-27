import React from 'react';
import Description from './Description';
import Stats from './Stats';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <>
      <Description name={name} tag={tag} location={location} avatar={avatar} />

      <Stats followers={followers} views={views} likes={likes} />
    </>
  );
};

export default Profile;
