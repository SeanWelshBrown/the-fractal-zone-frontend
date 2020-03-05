import React from 'react';
import p5 from 'p5';

const COLORS = ["#754687", "#465a87", "#c94f96", "#ebaa28", "#73a157", "#52afb3", "#d42f50", "#edc234", "#ff7340"]

class FractalCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5 (this.sketch, this.myRef.current)
        this.props.handleCanvasChange(this.myP5.canvas)
    }

    shouldComponentUpdate(prevProps) {
        if (prevProps.showModal !== this.props.showModal) {
            return false
        } else {
            return true
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.myP5._setupDone) {
            this.myP5.loading();
            setTimeout(this.renderCanvas, 1500);
            this.props.handleCanvasChange(this.myP5.canvas)
        }
    }

    calculateCurrentLen = (n, len) => {
        let calculatedLen = len;
        for (let i = 0; i < n; i++) {
            calculatedLen *= 0.5
        }
        return calculatedLen;
    }

    renderCanvas = () => {

        let {n, theta, axiom, initLen, setF, setG} = this.props
        
        let fractalArr;
        let len = this.calculateCurrentLen(n, initLen);

        const rules = {
            axiom: axiom.split(""),
            setF: setF.split(""),
            setG: []
        }

        if (setG) {
            rules.setG = rules.setG = this.props.ruleSetG.split("");
        }
    
        if (this.myP5) {
            fractalArr = this.calculateLSystem(n, rules);
            this.myP5.drawLSystem(fractalArr, len, theta);
        }
        
    }


    calculateLSystem = (n, rules) => {
        let nextFractalArr = [];
        if (n === 1) {
            return rules.axiom;
        } else {
            let fractalArr = this.calculateLSystem(n - 1, rules);
        
            fractalArr.forEach((el) => {
                if (el === 'F') {
                    let tempFractalArr = rules.setF;
                    tempFractalArr.forEach((ruleEl) => {nextFractalArr.push(ruleEl)});
                } else if (el === 'G') {
                    let tempFractalArr = rules.setG;
                    tempFractalArr.forEach((ruleEl) => {nextFractalArr.push(ruleEl)});
                } else if (el === '+') {
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

    factorial = (n) => {
        if (n === 0) {
            return 1;
        } else {
            return (n * this.factorial(n - 1))
        }
    }



    sketch = (p) => {

        p.setup = () => {
            p.createCanvas(500, 500);
            p.background(255);
            p.angleMode(p.DEGREES)
            this.renderCanvas()
        }

        p.drawLSystem = (fractalArr, segLen, theta) => {
            const randomCol = COLORS[Math.floor(Math.random() * COLORS.length)]
            const fractalArrLen = fractalArr.length
            
            p.background(255)
            p.stroke(randomCol)
            p.resetMatrix()
            p.translate(250 , 500)
            
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

        p.loading = () => {
            p.clear()
            p.background(255)
            p.circle(250,250,100)

        }

    
        p.draw = () => {
            
        }
    }
    


    render() {       
        return (
            <>
            <h2>Henlo, I am the canvas!</h2>
            <p>I have a blue dotted border.</p>
            <div
                className="canvas-container"
                ref={this.myRef}
            ></div>
            </>
        )
    }

} // end of FractalCanvas class

export default FractalCanvas;