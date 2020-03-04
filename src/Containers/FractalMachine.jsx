import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';
import ModalForm from '../Components/ModalForm'

const FractalMachine = (props) => {

    const [axiomValue, setAxiom] = useState("");
    const [rule1Value, setrule1Value] = useState("");
    const [rule2Value, setrule2Value] = useState("");
    const [angleValue, setAngleValue] = useState("");
    const [sliderValue, setSliderValue] = useState(225);

    const [currentCanvas, setCurrentCanvas] = useState()

    const [showModal, setShowModal] = useState(false)


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

    const handleCanvasChange = (canvas) => {
        setCurrentCanvas(canvas.canvas)
    }

    const handleModalClick = () => {
        setShowModal(!showModal)
    }

    const saveFractal = (fractalName) => {
        setShowModal(!showModal)
        const dataURL = currentCanvas.toDataURL()
        fetch('http://localhost:4000/fractals', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${props.token}`
            },
            body: JSON.stringify({
                name: fractalName,
                image: dataURL,
                parameters: {
                    theta: angleValue,
                    length: sliderValue,
                    rules: {
                        axiom: axiomValue,
                        setA: rule1Value,
                        setB: rule2Value
                    }
                }
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

    const exportFractal = (e) => {
        const dataURL = currentCanvas.toDataURL()
        e.target.href = dataURL
    }

    return(
        <div>

            <FractalCanvas 
                size={sliderValue}
                saveFractal={saveFractal}
                exportFractal={exportFractal}
                handleCanvasChange={handleCanvasChange}
            />

            <FractalMachineInput 
                axiomValue={axiomValue}
                rule1Value={rule1Value}
                rule2Value={rule2Value}
                angleValue={angleValue}
                sliderValue={sliderValue}
                handleUserInput={handleUserInput}
            />
            
            <div className="fractalButtons">
                <span>
                    {(showModal ? 
                        <button onClick={handleModalClick}>Close form</button>
                        :
                        <button onClick={handleModalClick}>Save fractal to gallery</button>
                    )}
                </span>
                <span>
                    <ModalForm 
                        showModal={showModal} 
                        saveFractal={saveFractal}
                    />
                </span>
                <span>
                    <button><a href="test" download="myCanvas.png" onClick={exportFractal}>Download fractal as .PNG file</a></button>
                </span>
            </div>

        </div>
    )
}

export default FractalMachine;