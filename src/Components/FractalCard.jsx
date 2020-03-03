import React from 'react';

const FractalCard = (props) => {

  let { id, name, image, fractal_type, username } = props.fractal

  const handleInitialDeleteFractal = () => {
    fetch(`http://localhost:4000/fractals/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then( () => props.handleDeleteFractal(id) )
  }

  if (props.context === "gallery") {
    return (
      <div>
        <img src={image} alt="a fractal" height="30%" width="30%" />
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Fractal Type: </strong>{fractal_type}</p>
        <p><strong>Created by: </strong>{username}</p>
      </div>
    )
  } else if (props.context === "profile") {
    return (
      <div>
        <img src={image} alt="a fractal" height="30%" width="30%" />
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Fractal Type: </strong>{fractal_type}</p>
        <button onClick={handleInitialDeleteFractal}>Delete</button>
      </div>
    )
  }

}

export default FractalCard;