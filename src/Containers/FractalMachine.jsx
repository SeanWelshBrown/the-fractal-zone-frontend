import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';

const FractalMachine = () => {

    const [userInputX, setUserInputX] = useState();
    const [userInputY, setUserInputY] = useState();
    const [sliderValue, setSliderValue] = useState(225);

    const handleUserInput = (e) => {
        console.log(e.target.value)
        let num = parseInt(e.target.value)
        if (e.target.name === "X") {
            setUserInputX(num)
        } else if (e.target.name === "Y") {
            setUserInputY(num)
        } else if (e.target.name === "slider") {
            setSliderValue(num)
        }
    }

    return(
        <div>
            <FractalCanvas />
            <FractalMachineInput 
                userInputX={userInputX}
                userInputY={userInputY}
                sliderValue={sliderValue}
                handleUserInput={handleUserInput}
            />
        </div>
    )
} // end of FractalMachine fn

export default FractalMachine;