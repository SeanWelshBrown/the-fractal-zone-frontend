import React from 'react';

const FractalMachineInput = (props) => {
  
    let { n, theta, axiom, initLen, setF, setG, handleUserInput } = props;

    return (
        <div className="fractalInputContainer">

          <h3> --~Make a Fractal~-- </h3>
          <p> Make something beautiful. </p>

          <div className="fractalInputs">

            <label>Axiom: </label>
            <input 
              key="axiom"
              type="text" 
              name="axiom" 
              placeholder="Enter an Axiom..." 
              value={axiom} 
              onChange={handleUserInput} 
            />
            
            <label>Rule F: </label>
            <input 
              key="ruleF"
              type="text" 
              name="ruleF" 
              placeholder="Enter a first rule..." 
              value={setF} 
              onChange={handleUserInput} 
            />
            
            <label>Rule G: </label>
            <input 
              key="ruleG"
              type="text" 
              name="ruleG" 
              placeholder="(optional)"
              value={setG} 
              onChange={handleUserInput} 
            />
            
            <label>Theta: </label>
            <input 
              key="theta"
              type="number" 
              name="theta" 
              placeholder="Enter an angle..." 
              value={theta} 
              onChange={handleUserInput} 
            />
            
            <label>Length: </label>
            <input 
              key="length"
              type="range" 
              name="length" 
              min="100" 
              max="500" 
              step="25"
              value={initLen} 
              onChange={handleUserInput} 
            />

           <label>Size: </label>
            <input 
              key="size"
              type="range" 
              name="size" 
              min="1" 
              max="6" 
              step="1"
              value={n} 
              onChange={handleUserInput} 
            />

          </div>

        </div>
      )
    
} // end of FractalMachineInput fn

export default FractalMachineInput;