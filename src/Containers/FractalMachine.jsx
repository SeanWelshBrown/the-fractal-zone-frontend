import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';

const FractalMachine = (props) => {

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

    const saveFractal = (p5) => {
        const dataURL = p5.canvas.toDataURL()
        fetch('http://localhost:4000/fractals', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${props.token}`
            },
            body: JSON.stringify({
                name: "",
                image: dataURL,
                rule: "",
                fractal_type: "Triangle"
            })
        })
    }

    return(
        <div>
            <FractalCanvas 
                size={sliderValue}
                saveFractal={saveFractal}
            />
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