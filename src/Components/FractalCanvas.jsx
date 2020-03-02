import React from 'react';
import Sketch from "react-p5"

class FractalCanvas extends React.Component {

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef); 
        // this.sierpinksi(this.x1, this.y1, 400, p5)
    };

    draw = (p5) => {
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
        </div>
        );
    }
} // end of FractalCanvas class

export default FractalCanvas;