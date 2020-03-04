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
      <div>
        <form onSubmit={handleInitialSubmit}>
          <label>Enter a name: </label>
          <input type="text" name="name" placeholder="name..." value={fractalName} onChange={handleChangeInput} />
          <br />
          <input type="submit" value="Save fractal" />
        </form>
      </div>
    )
  }

}

export default ModalForm;