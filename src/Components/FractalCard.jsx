import React, { useState } from 'react';

const FractalCard = (props) => {

  const [isClicked, setClicked] = useState(false)

  let { id, name, image, username, parameters } = props.fractal

  const handleInitialDeleteFractal = () => {
    fetch(`http://localhost:4000/fractals/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then( () => props.handleDeleteFractal(id) )
  }

  const handleCardClick = () => {
    setClicked(!isClicked)
  }

  if (props.context === "gallery") {

    if (isClicked === false) {
      return (
        <div className="fractalCard" onClick={handleCardClick}>
          <img src={image} alt="a fractal" />
          <p><strong>Name: </strong>{name}</p>
          <p><strong>Created by: </strong>{username}</p>
        </div>
      )
    } else if (isClicked === true) {
      return (
        <div className="fractalCard" onClick={handleCardClick}>
          <div className="extraCardInfoDiv">
            <p><strong>Theta: </strong>{parameters.theta}</p>
            <p><strong>Length: </strong>{parameters.length}</p>
            <p><strong>Axiom: </strong>{parameters.rules.axiom}</p>
            <p><strong>Ruleset F: </strong>{parameters.rules.setF}</p>
            <p><strong>Ruleset G: </strong>{parameters.rules.setG}</p>
          </div>
          <img src={image} alt="a fractal" />
          <p><strong>Name: </strong>{name}</p>
          <p><strong>Created by: </strong>{username}</p>
        </div>
      )
    }

  } else if (props.context === "profile") {

    if (isClicked === false) {
      return (
        <div className="fractalCard" onClick={handleCardClick}>
          <img src={image} alt="a fractal" />
          <p><strong>Name: </strong>{name}</p>
          <button className="deleteBtn" onClick={handleInitialDeleteFractal}>Delete</button>
          <br /><br />
        </div>
      )
    } else if (isClicked === true) {
      return (
        <div className="fractalCard" onClick={handleCardClick}>
          <div className="extraCardInfoDiv">
            <p><strong>Theta: </strong>{parameters.theta}</p>
            <p><strong>Length: </strong>{parameters.length}</p>
            <p><strong>Axiom: </strong>{parameters.rules.axiom}</p>
            <p><strong>Ruleset F: </strong>{parameters.rules.setA}</p>
            <p><strong>Ruleset G: </strong>{parameters.rules.setB}</p>
          </div>
          <img src={image} alt="a fractal" />
          <p><strong>Name: </strong>{name}</p>
          <button className="deleteBtn" onClick={handleInitialDeleteFractal}>Delete</button>
          <br /><br />
        </div>
      )
    }
  }

}

export default FractalCard;