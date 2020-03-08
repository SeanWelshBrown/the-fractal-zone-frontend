import React, { useState } from 'react';
import FractalCanvas from '../Components/FractalCanvas';
import FractalMachineInput from '../Components/FractalMachineInput';
import ModalForm from '../Components/ModalForm'
import GuidanceModal from '../Components/GuidanceModal'


const FractalMachine = (props) => {

    // set initial state to default fractal
    const [fractalParams, setFractalParams] = useState({
        axiom: "F",
        setF: "FF+[+F-F-F]-[-F+F+F]" ,
        setG: "",
        theta: 20,
        initLen: 200,
        n: 1
    })

    // set state to the current canvas for export 
    const [currentCanvas, setCurrentCanvas] = useState()

    // conditional rendering state for pop up modals
    const [showModal, setShowModal] = useState(false)
    const [showGuidanceModal, setShowGuidanceModal] = useState(false)


    // takes in the input from the fractal parameter form
    // this is triggered when the user clicks "generate"
    const handleFormSubmit = (e, nValue, thetaValue, axiomValue, initLenValue, setFValue, setGValue) => {
        e.preventDefault()
  
        setFractalParams({
            axiom: axiomValue.current.value,
            setF: setFValue.current.value,
            setG: setGValue.current.value,
            theta: thetaValue.current.value,
            initLen: initLenValue.current.value,
            n: nValue.current.value 
        })
    }

    // keep up to date with changes to the canvas
    const handleCanvasChange = (canvas) => {
        setCurrentCanvas(canvas)
    }

    // show or hide pop-up modals
    const handleModalClick = () => {
        setShowModal(!showModal)
    }
    
    const handleGuidanceModalClick = () => {
        setShowGuidanceModal(!showGuidanceModal)
    }
    
    // save fractal to the gallery and persist it to back-end
    const saveFractal = (fractalName) => {
        setShowModal(!showModal)

        const dataURL = currentCanvas.toDataURL()
        const {n, theta, axiom, initLen, setF, setG} = fractalParams;
       
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

    // export as PNG download
    const exportFractal = (e) => {
        const dataURL = currentCanvas.toDataURL()
        e.target.href = dataURL
    }

    return(
        <div>
            <FractalCanvas 
                fractalParams={fractalParams}

                handleCanvasChange={handleCanvasChange}
            />
            <div>
                <button onClick={handleGuidanceModalClick}>Need guidance?</button>
            </div>

            <FractalMachineInput 
                fractalParams={fractalParams}

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
                    <a className="download-link" href="test" download="fractal.png" onClick={exportFractal}>⥥ Download as .PNG File </a>
                </span>
            </div>

        </div>
    )
}

export default FractalMachine;