import React from 'react';
import Address from './Address';
import Email from './Email';
import Name from './Name';
import PersonalInfo from './PersonalInfo';

const Profile = () => {
  return (
    <div className="profile">
      <Name />
      <div className="info">
        <Email />
        <Address />
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Profile;
