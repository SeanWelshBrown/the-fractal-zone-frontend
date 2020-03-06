import React, { useState } from 'react';

const FractalCard = (props) => {

  const [isClicked, setClicked] = useState(false)

  let { id, name, image, username, parameters } = props.fractal

  const handleInitialDeleteFractal = () => {
    fetch(`https://everybody-loves-fractals.herokuapp.com/fractals/${id}`, {
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

  const exportFractal = (e) => {
    e.target.href = image
}

  if (props.context === "gallery") {

      return (
        <div className="fractal-card" >
          <div className="fractal-img-wrapper" onClick={handleCardClick} >
          {isClicked === true ? 
            (<div className="extra-card-info" >
              <p><strong>Theta: </strong>{parameters.theta}</p>
              <p><strong>Length: </strong>{parameters.length}</p>
              <p><strong>Axiom: </strong>{parameters.rules.axiom}</p>
              <p><strong>Ruleset F: </strong>{parameters.rules.setF}</p>
              <p><strong>Ruleset G: </strong>{parameters.rules.setG}</p>
            </div>) :
             null
             }
          <img src={image} alt={name} />
          </div>
          <p><strong>Name: </strong>{name}</p>
          <p><strong>Created by: </strong>{username}</p>
          <a className="download-link" href="test" download="myCanvas.png" onClick={exportFractal}>⥥ Download as .PNG File</a>
          <br /><br />
        </div>
      )
    

  } else if (props.context === "profile") {

      return (
        <div className="fractal-card" >
          <div className="fractal-img-wrapper" onClick={handleCardClick} >
          {isClicked === true ? 
            (<div className="extra-card-info" >
              <p><strong>Theta: </strong>{parameters.theta}</p>
              <p><strong>Length: </strong>{parameters.length}</p>
              <p><strong>Axiom: </strong>{parameters.rules.axiom}</p>
              <p><strong>Ruleset F: </strong>{parameters.rules.setF}</p>
              <p><strong>Ruleset G: </strong>{parameters.rules.setG}</p>
            </div>) :
             null
             }
          <img src={image} alt="a fractal" />
          </div>
          <p><strong>Name: </strong>{name}</p>
          <a className="download-link" href="test" download="myCanvas.png" onClick={exportFractal}>⥥ Download as .PNG File</a>
          <br /><br />
          <button className="delete-btn" onClick={handleInitialDeleteFractal}>Delete</button>
          <br /><br />
        </div>
      )
    }
}

export default FractalCard;