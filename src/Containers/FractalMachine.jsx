import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';

const FractalMachine = (props) => {

    const [axiomValue, setAxiom] = useState("");
    const [rule1Value, setrule1Value] = useState("");
    const [rule2Value, setrule2Value] = useState("");
    const [angleValue, setAngleValue] = useState("");
    const [sliderValue, setSliderValue] = useState(225);

    const handleUserInput = (e) => {
        switch (e.target.name) {
            case "axiom":
                setAxiom(e.target.value)
                break;
            case "rule1":
                setrule1Value(e.target.value)
                break;
            case "rule2":
                setrule2Value(e.target.value)
                break;
            case "angle":
                if (e.target.value === "") {
                    setAngleValue(e.target.value)
                    break;
                } else {
                    setAngleValue(parseInt(e.target.value))
                    break;
                }
            case "slider":
                setSliderValue(parseInt(e.target.value))
                break;
            default:
                return null
        }
    }

    const saveFractal = (p5, fractalName) => {
        const dataURL = p5.canvas.toDataURL()
        fetch('http://localhost:4000/fractals', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${props.token}`
            },
            body: JSON.stringify({
                name: fractalName,
                image: dataURL,
                rule: "",
                fractal_type: "Triangle"
            })
        })
        .then( r => r.json() )
        .then( response => {
            if (response.message) {
                alert(response.message)
            } else {
                props.handleSaveFractal(response)
            }
        })
    }

    const exportFractal = (p5, e) => {
        const dataURL = p5.canvas.toDataURL()
        e.target.href = dataURL
    }

    return(
        <div>
            <FractalCanvas 
                size={sliderValue}
                saveFractal={saveFractal}
                exportFractal={exportFractal}
            />
            <FractalMachineInput 
                axiomValue={axiomValue}
                rule1Value={rule1Value}
                rule2Value={rule2Value}
                angleValue={angleValue}
                sliderValue={sliderValue}
                handleUserInput={handleUserInput}
            />
        </div>
    )
} // end of FractalMachine fn

export default FractalMachine;