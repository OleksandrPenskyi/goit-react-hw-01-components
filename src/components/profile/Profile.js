import React from 'react';
import Description from './Description';
import Stats from './Stats';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />

      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

export default Profile;
