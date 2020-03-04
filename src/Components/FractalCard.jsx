import React from 'react';

const FractalCard = (props) => {

  let { id, name, image, username } = props.fractal

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
      <div className="fractalCard">
        <img src={image} alt="a fractal" />
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Created by: </strong>{username}</p>
      </div>
    )
  } else if (props.context === "profile") {
    return (
      <div className="fractalCard">
        <img src={image} alt="a fractal" />
        <p><strong>Name: </strong>{name}</p>
        <button onClick={handleInitialDeleteFractal}>Delete</button>
        <br /><br />
      </div>
    )
  }

}

export default FractalCard;