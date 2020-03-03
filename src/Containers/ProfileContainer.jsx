import React from 'react';
import Profile from '../Components/Profile';
import UserFractals from '../Components/UserFractals';

const ProfileContainer = (props) => {
  return (
    <div>
      <h2>Profile</h2>
      <Profile 
        currentUser={props.currentUser} 
      />
      <h5>Your fractals:</h5>
      <UserFractals 
        currentUser={props.currentUser}
        fractals={props.fractals} 
        handleDeleteFractal={props.handleDeleteFractal}
      />
    </div>
  )
}

export default ProfileContainer;