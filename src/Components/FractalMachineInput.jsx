import React from 'react';

const FractalMachineInput = (props) => {
  
    let { axiomValue, rule1Value, rule2Value, angleValue, sliderValue, handleUserInput } = props

    return (
        <div className="fractalInputContainer">

          <h3>Input!</h3>
          <p>This is where the user will give input to make a fractal.</p>

          <div className="fractalInputs">

            <label>Axiom: </label>
            <input 
              type="text" 
              name="axiom" 
              placeholder="Enter an Axiom..." 
              value={axiomValue} 
              onChange={handleUserInput} 
            />
            
            <label>Rule 1: </label>
            <input 
              type="text" 
              name="rule1" 
              placeholder="Enter a first rule..." 
              value={rule1Value} 
              onChange={handleUserInput} 
            />
            
            <label>Rule 2: </label>
            <input 
              type="text" 
              name="rule2" 
              placeholder="Enter a second rule..." 
              value={rule2Value} 
              onChange={handleUserInput} 
            />
            
            <label>Angle: </label>
            <input 
              type="number" 
              name="angle" 
              placeholder="Enter an angle..." 
              value={angleValue} 
              onChange={handleUserInput} 
            />
            
            <input 
              type="range" 
              name="slider" 
              min="10" 
              max="225" 
              step="5"
              value={sliderValue} 
              onChange={handleUserInput} 
            />
            

          </div>

        </div>
      )
    
} // end of FractalMachineInput fn

export default FractalMachineInput;