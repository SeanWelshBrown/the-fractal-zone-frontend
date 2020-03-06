import React, { useState } from 'react';

const ModalForm = (props) => {

  const [fractalName, setFractalName] = useState("")

  const handleChangeInput = (e) => {
    setFractalName(e.target.value)
  }

  const handleInitialSubmit = (e) => {
    e.preventDefault()
    props.saveFractal(fractalName)
    setFractalName("")
  }

  if (props.showModal === false) {
    return null
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
        <form classname="save-fractal-form" onSubmit={handleInitialSubmit}>
          <label>Enter a name: 
          <input type="text" name="name" placeholder="name..." value={fractalName} onChange={handleChangeInput} />
          </label>
          <br />
          <input type="submit" value="Save fractal" />
        </form>
        <button onClick={props.handleModalClick}>-𝕏-</button>
      </div>
      </div>
    )
  }

}

export default ModalForm;