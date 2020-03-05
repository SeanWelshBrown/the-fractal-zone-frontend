import React, { useRef } from 'react';

const FractalMachineInput = (props) => {
  
    let { n, theta, axiom, initLen, setF, setG, handleFormSubmit} = props;

    const nValue = useRef();
    const thetaValue = useRef();
    const axiomValue = useRef();
    const initLenValue = useRef();
    const setFValue = useRef();
    const setGValue = useRef();


    return (
        <div className="fractalInputContainer">

          <h3> --~Make a Fractal~-- </h3>
          <p> Make something beautiful. </p>

          <div className="fractalInputs">

          <form className="fractalInputForm" onSubmit={(e) => {handleFormSubmit(e, nValue, thetaValue, axiomValue, initLenValue, setFValue, setGValue)}}>
            <label>Axiom: </label>
            <input 
              key={axiom}
              ref={axiomValue}
              type="text" 
              name="axiom" 
              placeholder="Enter an Axiom..." 
              defaultValue={axiom} 
            />
            
            <label>Rule F: </label>
            <input 
              key={setF}
              ref={setFValue}
              type="text" 
              name="ruleF" 
              placeholder="Enter a first rule..." 
              defaultValue={setF}  
            />
            
            <label>Rule G: </label>
            <input 
              key={setG}
              ref={setGValue}
              type="text" 
              name="ruleG" 
              placeholder="(optional)"
              defaultValue={setG} 
            />
            
            <label>Theta: </label>
            <input 
              key={theta}
              ref={thetaValue}
              type="number" 
              name="theta" 
              placeholder="Enter an angle..." 
              defaultValue={theta}  
            />
            
            <label>Length: </label>
            <input 
              key={initLen}
              ref={initLenValue}
              type="range" 
              name="length" 
              min="100" 
              max="500" 
              step="25"
              defaultValue={initLen} 
            />

           <label>Size: </label>
            <input 
              key={n}
              ref={nValue}
              type="range" 
              name="size" 
              min="1" 
              max="6" 
              step="1"
              defaultValue={n} 
            />

            <input type="submit" value="Submit" />
            
          </form>

          </div>

        </div>
      )
    
} // end of FractalMachineInput fn

export default FractalMachineInput;