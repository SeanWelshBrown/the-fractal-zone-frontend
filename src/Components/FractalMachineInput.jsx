import React from 'react';

const FractalMachineInput = (props) => {
  

    return (
        <div>
          <h3>Input!</h3>
          <p>This is where the user will give input to make a fractal.</p>

          {/* <label>X: </label>
          <input 
            type="number" 
            name="X" 
            placeholder="Enter a number..." 
            value={props.userInputX} 
            onChange={props.handleUserInput} 
          />
          <br/>
          <label>Y: </label>
          <input 
            type="number" 
            name="Y" 
            placeholder="Enter a number..." 
            value={props.userInputY} 
            onChange={props.handleUserInput} 
          /> */}
          
          <input 
            type="range" 
            min="1" 
            max="5"
            step="1"
            value={props.sliderValue} 
            name="slider" 
            onChange={props.handleUserInput} 
          />

        </div>
      )
    
} // end of FractalMachineInput fn

export default FractalMachineInput;