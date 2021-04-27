import React from 'react';
import Description from './Description';
import Stats from './Stats';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;

  return (
    <>
      <Description name={name} tag={tag} location={location} avatar={avatar} />

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </>
  );
};

export default Profile;
