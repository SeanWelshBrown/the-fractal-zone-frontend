import React from 'react';

const FractalCard = (props) => {

  let { name, image, rule, fractal_type } = props.fractal

  return (
    <div>
      <img src={image} alt="Image of fractal" height="30%" width="30%" />
      <p><strong>Name: </strong>{name}</p>
      <p><strong>Rule: </strong>{rule}</p>
      <p><strong>Fractal Type: </strong>{fractal_type}</p>
    </div>
  )

}

export default FractalCard;