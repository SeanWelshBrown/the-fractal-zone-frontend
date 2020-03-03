import React from 'react';
import Profile from '../Components/Profile';
import UserFractals from '../Components/UserFractals';

const ProfileContainer = (props) => {
  return (
    <div>
      <h3>Profile</h3>
      <Profile 
        currentUser={props.currentUser} 
      />
      <h5>Your fractals:</h5>
      <UserFractals 
        currentUser={props.currentUser}
        fractals={props.fractals} 
      />
    </div>
  )
}

export default ProfileContainer;