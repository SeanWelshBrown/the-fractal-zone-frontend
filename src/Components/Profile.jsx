import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <p>Hello, <strong>{props.currentUser.username}</strong>.</p>
    </div>
  )
}

export default Profile;