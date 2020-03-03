import React from 'react';
import Sketch from "react-p5"
import ModalForm from './ModalForm';

let canvas;

class FractalCanvas extends React.Component {

    state = {
        showModal: false
    }
    
    setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef); 
    };

    draw = (p5) => {
        canvas = p5;
        p5.background(255);
        let isBlue = false;
        const sierpinksi = (x, y, size) => {
    
            if (size > this.props.size) {
                p5.stroke(isBlue ? "#03d7fc" : "#db66ff")
                p5.triangle(x, y, (x + size), y, (x + (size/2)), (y - (size/2)));
                isBlue = !isBlue;
                sierpinksi(x, y, (size/2))
                sierpinksi(x + size / 2, y, size / 2)
                isBlue = !isBlue;
                sierpinksi(x + size / 4, y - size / 4, size / 2)
            }
        }
        sierpinksi(25, 350, 450)
    };

    handleModalClick = () => {
        this.setState({ showModal: !this.state.showModal })
    }
    
    handleInitialSave = (fractalName) => {
        this.props.saveFractal(canvas, fractalName);
        this.setState({ showModal: !this.state.showModal })
    }

    handleInitialExport = (e) => {
        this.props.exportFractal(canvas, e);
    }
    
    render() {
        return (
        <div>
            <h2>Henlo, I am the canvas!</h2>
            <p>I have a blue dotted border. I do not work yet.</p> 
            <Sketch
            className="fractal-canvas"
            setup={this.setup} 
            draw={this.draw}
            sierpinksi={this.sierpinksi}
            />
            {(this.state.showModal ? 
                <button onClick={this.handleModalClick}>Close form</button>
                :
                <button onClick={this.handleModalClick}>Save fractal to gallery</button>
            )}
            <ModalForm 
                showModal={this.state.showModal} 
                handleInitialSave={this.handleInitialSave}
            />
            <br />
            <button><a href="test" download="myCanvas.png" onClick={this.handleInitialExport}>Download fractal as .PNG file</a></button>
        </div>
        );
    }
} // end of FractalCanvas class

export default FractalCanvas;