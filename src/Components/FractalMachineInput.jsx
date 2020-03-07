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
        <div className="fractal-input-container">

          <h3> 『 Create⊶a⊷Fractal 』 </h3>

          <div className="fractal-inputs">

          <form className="fractal-input-form" onSubmit={(e) => {handleFormSubmit(e, nValue, thetaValue, axiomValue, initLenValue, setFValue, setGValue)}}>
            <div className="inner-fractal-inputs-container">
            <label>Axiom: 
              <input
              key={axiom}
              ref={axiomValue}
              className="fractal-form-input axiom"
              type="text" 
              pattern="^[FG+\-[\]]*$"
              name="axiom" 
              placeholder="Enter an Axiom..." 
              defaultValue={axiom} 
            />
            </label>
            
            <label>Rule F:
            <input 
              key={setF}
              ref={setFValue}
              className="fractal-form-input rule-input"
              type="text" 
              pattern="^[FG+\-[\]]*$"
              name="ruleF" 
              placeholder="Enter a first rule..." 
              defaultValue={setF}  
            />
             </label>
            
            <label>Rule G:
            <input 
              key={setG}
              ref={setGValue}
              className="fractal-form-input rule-input"
              type="text"
              pattern="^[FG+\-[\]]*$"
              name="ruleG" 
              placeholder="(optional)"
              defaultValue={setG} 
            />
             </label>

            <label>θ:
            <input 
              key={theta}
              ref={thetaValue}
              className="fractal-form-input theta"
              type="number" 
              name="theta" 
              placeholder="Enter an angle..." 
              defaultValue={theta}  
            />
            </label>

            <div className="sliders">
            <label>Length:
            <input 
              key={initLen}
              ref={initLenValue}
              className="fractal-form-input"
              type="range" 
              name="length" 
              min="100" 
              max="500" 
              step="25"
              defaultValue={initLen} 
            />
            </label>

           <label>Size:
            <input 
              key={n}
              ref={nValue}
              className="fractal-form-input"
              type="range" 
              name="size" 
              min="1" 
              max="8" 
              step="1"
              defaultValue={n} 
            />
             </label>
             </div>
            </div>
            <input type="submit" value="⫷ Generate ⫸" />
            
          </form>

          </div>

        </div>
      )
    
} // end of FractalMachineInput fn

export default FractalMachineInput;