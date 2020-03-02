import React from 'react';

class FractalCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }
    
    render() {
        return(
            <div>
             <h2>Henlo, I am the canvas!</h2>
             <p>I have a blue dotted border. I do not work yet.</p>
             <canvas 
               className="fractal-canvas"
               width={500}
               height={500}
               ref={this.canvas}
             />
            </div>
        )
    }
} // end of FractalCanvas class

export default FractalCanvas;