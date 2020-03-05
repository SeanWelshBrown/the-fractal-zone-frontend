import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';
import ModalForm from '../Components/ModalForm'

const FractalMachine = (props) => {

    const [axiom, setAxiom] = useState("F");
    const [setF, setRuleFValue] = useState("FF+[+F-F-F]-[-F+F+F]");
    const [setG, setRuleGValue] = useState("");
    const [theta, setThetaValue] = useState(20);
    const [initLen, setLengthValue] = useState(200);
    const [n, setSizeValue] = useState(1);

    const [currentCanvas, setCurrentCanvas] = useState()

    const [showModal, setShowModal] = useState(false)


    const handleUserInput = (e) => {
        switch (e.target.name) {
            case "size":
                setSizeValue(parseInt(e.target.value))
                break;
            case "axiom":
                setAxiom(e.target.value)
                break;
            case "ruleF":
                setRuleFValue(e.target.value)
                break;
            case "ruleG":
                setRuleGValue(e.target.value)
                break;
            case "theta":
                setThetaValue(parseInt(e.target.value))
                break;
            case "length":
                setLengthValue(parseInt(e.target.value))
                break;
            default:
                return null
        }
    }

    const handleCanvasChange = (canvas) => {
        setCurrentCanvas(canvas)
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
                    theta: theta,
                    length: initLen,
                    size: n,
                    rules: {
                        axiom: axiom,
                        setF: setF,
                        setG: setG
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
                n={n}
                theta={theta}
                axiom={axiom}
                initLen={initLen}
                setF={setF}
                setG={setG}

                handleCanvasChange={handleCanvasChange}
            />

            <FractalMachineInput 
                n={n}
                theta={theta}
                axiom={axiom}
                initLen={initLen}
                setF={setF}
                setG={setG}

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