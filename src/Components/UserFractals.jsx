import React from 'react';
import FractalCard from './FractalCard';

const UserFractals = (props) => {

  let fractals = props.fractals
  let currentUser = props.currentUser
  let userFractals = fractals.filter( fractal => fractal.user_id === currentUser.id )

  const renderFractals = () => {
    return userFractals.map( fractal => {
      return (
        <FractalCard 
          key={fractal.id} 
          fractal={fractal} 
          context="profile" 
          handleDeleteFractal={props.handleDeleteFractal}
        />
      )
    })
  }

  return (
    <div>
      {renderFractals()}
    </div>
  )

}

export default UserFractals;