import React from 'react';

const FractalCard = (props) => {

  let { name, image, fractal_type, username } = props.fractal

  if (props.context === "gallery") {
    return (
      <div>
        <img src={image} alt="a fractal" height="30%" width="30%" />
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Fractal Type: </strong>{fractal_type}</p>
        <p><strong>Created by: </strong>{username}</p>
      </div>
    )
  } else {
    return (
      <div>
        <img src={image} alt="a fractal" height="30%" width="30%" />
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Fractal Type: </strong>{fractal_type}</p>
      </div>
    )
  }

}

export default FractalCard;