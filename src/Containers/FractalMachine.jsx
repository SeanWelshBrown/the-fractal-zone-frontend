import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';
import ModalForm from '../Components/ModalForm'
import GuidanceModal from '../Components/GuidanceModal'


const FractalMachine = (props) => {

    const [axiom, setAxiom] = useState("F");
    const [setF, setRuleFValue] = useState("FF+[+F-F-F]-[-F+F+F]");
    const [setG, setRuleGValue] = useState("");
    const [theta, setThetaValue] = useState(20);
    const [initLen, setLengthValue] = useState(200);
    const [n, setSizeValue] = useState(1);

    const [currentCanvas, setCurrentCanvas] = useState()

    const [showModal, setShowModal] = useState(false)
    const [showGuidanceModal, setShowGuidanceModal] = useState(false)


    const handleFormSubmit = (e, nValue, thetaValue, axiomValue, initLenValue, setFValue, setGValue) => {
        e.preventDefault()
        setSizeValue(nValue.current.value)
        setThetaValue(thetaValue.current.value)
        setAxiom(axiomValue.current.value)
        setLengthValue(initLenValue.current.value)
        setRuleFValue(setFValue.current.value)
        setRuleGValue(setGValue.current.value)
    }

    const handleCanvasChange = (canvas) => {
        setCurrentCanvas(canvas)
    }

    const handleModalClick = () => {
        setShowModal(!showModal)
    }
    
    const handleGuidanceModalClick = () => {
        setShowGuidanceModal(!showGuidanceModal)
    }
    
    

    const saveFractal = (fractalName) => {
        setShowModal(!showModal)
        const dataURL = currentCanvas.toDataURL()
        fetch('https://everybody-loves-fractals.herokuapp.com/fractals', {
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
                showModal={showModal}

                handleCanvasChange={handleCanvasChange}
            />
            <div>
                <button onClick={handleGuidanceModalClick}>Need guidance?</button>
            </div>

            <FractalMachineInput 
                n={n}
                theta={theta}
                axiom={axiom}
                initLen={initLen}
                setF={setF}
                setG={setG}

                handleFormSubmit={handleFormSubmit}
            />
            
            <div className="fractal-buttons">
                <span>
                    {
                        <button onClick={handleModalClick}> Save Fractal to Gallery ⥣</button>
                    }
               
                    <ModalForm 
                        showModal={showModal} 
                        handleModalClick={handleModalClick}
                        saveFractal={saveFractal}
                    />
                    <GuidanceModal
                        showGuidanceModal={showGuidanceModal}
                        handleGuidanceModalClick={handleGuidanceModalClick}
                    />
                    <a className="download-link" href="test" download="myCanvas.png" onClick={exportFractal}>⥥ Download as .PNG File </a>
                </span>
            </div>

        </div>
    )
}

export default FractalMachine;