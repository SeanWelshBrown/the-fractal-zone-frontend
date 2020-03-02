import React from 'react';
import Profile from '../Components/Profile'

const ProfileContainer = (props) => {
  return (
    <div>
      <h3>Profile Page</h3>
      
      <Profile currentUser={props.currentUser} />
      {/* User's fractals go here for display/edit/deletion */}
    </div>
  )
}

export default ProfileContainer;