import React from 'react';
import Description from './Description';
import Stats from './Stats';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <>
    <Description name={name} tag={tag} location={location} avatar={avatar} />

    <Stats stats={stats} />
  </>
);

export default Profile;
