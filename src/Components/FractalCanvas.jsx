import React from 'react';
import p5 from 'p5';

// constant color array to grab random colors from when new fractal is drawn
const COLORS = ["#754687", "#465a87", "#c94f96", "#ebaa28", "#73a157", "#52afb3", "#d42f50", "#edc234", "#ff7340"]

class FractalCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // ref to canvas
    }

    // set initial state so that canvas renders default fractal on page load
    state = {
        initialRender: false
    }

    // create p5 canvas
    componentDidMount() {
        this.myP5 = new p5 (this.sketch, this.myRef.current)
        this.props.handleCanvasChange(this.myP5.canvas)
    }

    // to avoid unecessary re-renders
    shouldComponentUpdate(prevProps) {
        // canvas renders something initially once p5 is completely loaded
        if (!this.state.initialRender && this.myP5._setupDone) {
            this.setState({initialRender: true})
            return true;
        // after that, only re-render when the input params have changed
        }else if (prevProps.fractalParams === this.props.fractalParams) {
            return false;
        } else {
            return true;
        }
    }

    // render loading screen between updates
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.myP5._setupDone) {
            this.myP5.loading();
            setTimeout(this.renderCanvas, 1200);
            this.props.handleCanvasChange(this.myP5.canvas); // handle changes to canvas so PNG export reflects current version
        }
    }

    // when n increases, line segments need to be shortened respectively
    calculateCurrentLen = (n, len) => {
        let calculatedLen = len;
        for (let i = 0; i < n; i++) {
            calculatedLen *= 0.5
        }
        return calculatedLen;
    }

    // render canvas function
    // responsible for calculating instructions and then drawing the fractal based on params
    renderCanvas = () => {
        let {n, theta, axiom, initLen, setF, setG} = this.props.fractalParams;
        
        let fractalArr;
        let len = this.calculateCurrentLen(n, initLen);

        const rules = {
            axiom: axiom.split(""),
            setF: setF.split(""),
            setG: []
        }

        // set G is optional
        if (setG) {
            rules.setG = rules.setG = setG.split("");
        }
    
        // calculate the string of instructions, then pass that to the drawing function
        if (this.myP5) {
            fractalArr = this.calculateLSystem(n, rules);
            this.myP5.drawLSystem(fractalArr, len, theta);
        }
        
    }

    // responsible for calculating the string of instructions for the drawing function
    calculateLSystem = (n, rules) => {

        // initialize empty array that will hold all the instructions
        // this needs to happen because the fractal array would have unneccesarry instructions appended to it
        let nextFractalArr = [];

        // recursively append production rules to the next fractal array
        if (n === 1 || n === 0) {
            return rules.axiom;
        } else {
            let fractalArr = this.calculateLSystem(n - 1, rules);
        
            fractalArr.forEach((el) => {
                if (el === 'F') {
                    // for each encounter of an 'F' character, append all characters in ruleSetF 
                    let tempFractalArr = rules.setF;
                    tempFractalArr.forEach((ruleEl) => {nextFractalArr.push(ruleEl)});
                } else if (el === 'G') {
                    // same as above, but for ruleSetG
                    let tempFractalArr = rules.setG;
                    tempFractalArr.forEach((ruleEl) => {nextFractalArr.push(ruleEl)});
                } 
                // all other elements simply get appended
                else if (el === '+') {
                    nextFractalArr.push(el);
                } else if (el === '-') {
                    nextFractalArr.push(el);
                } else if (el === '[') {
                    nextFractalArr.push(el);
                } else if (el === ']') {
                    nextFractalArr.push(el);
                }
            });
            return nextFractalArr;
        }
    }

    // p5 in instance mode
    sketch = (p) => {

        p.setup = () => {
            p.createCanvas(500, 500);
            p.background(255);
            p.angleMode(p.DEGREES)
            p.clear()
        }

        // function responsible for drawing based on calculated set of instructions
        p.drawLSystem = (fractalArr, segLen, theta) => {
            // get random color from constant array
            const randomCol = COLORS[Math.floor(Math.random() * COLORS.length)]

            const fractalArrLen = fractalArr.length
            
            // set background to white, set stroke to random color
            p.background(255)
            p.stroke(randomCol)

            // reset drawing matrix and start the drawing point at the middle and bottom of canvas
            p.resetMatrix()
            p.translate(250 , 500)
            
            // iterate through the set of instructions and draw accordingly
            for (let i = 0; i < fractalArrLen; i++) {
                const el = fractalArr[i];

                if (el === 'F') {
                    p.line(0, 0, 0, -segLen);
                    p.translate(0, -segLen);
                } else if (el === 'G') {
                    p.translate(0, -segLen)
                } else if (el === '+') {
                    p.rotate(theta);
                } else if (el === '-') {
                    p.rotate(-theta);
                } else if (el === '[') {
                    p.push()
                } else if (el === ']') {
                    p.pop()
                }
            }
        }

        // loading screen
        p.loading = () => {
            p.clear()
            p.background(255)
            p.circle(250,250,100)
        }

    
        // not using the draw function because we aren't animating anything
        p.draw = () => {
        }
    }
    


    render() {       
        return (
            <>
            <h2>The Fractal Machine</h2>
            <p>Hello. I am the fractal machine. I can make your dreams and nightmares come true.</p>
            <div
                className="canvas-container"
                ref={this.myRef} // ref to html5 canvas
            />
            </>
        )
    }

} // end of FractalCanvas class

export default FractalCanvas;