import React from 'react';
import p5 from 'p5';


class FractalCanvas extends React.Component {

    
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5 (this.sketch, this.myRef.current)
        this.props.handleCanvasChange(this.myP5.canvas)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInput !== this.props.userInput) {
            this.renderCanvas();
            this.props.handleCanvasChange(this.myP5.canvas)
        }
    }

    calculateTranslateNum = (ruleSet) => {
        let count = 0;
        ruleSet.forEach((ruleEl) => { 
            if (ruleEl === 'A' || ruleEl === 'B') {
                count++
            }
        })
        return count;
    }
    renderCanvas = () => {
        let n = this.props.userInput;

        let fractalArr;
        const min = 1;
        const theta = 90;
        const rules = {
            axiom: "",
            setA: [],
            setB: []
        }
     

        rules.axiom = "A-A-A-A".split("")
        rules.setA = "AA-A+A-A-AA".split("")
       
        const translateNum = this.calculateTranslateNum(rules.setA)

        this.myP5.clear()

        if (n > min) {
            fractalArr = this.calculateLSystem(n, rules)
            this.myP5.drawLSystem(fractalArr, n, 8, theta, min, translateNum);
        } 
    }

    calculateLSystem = (n, rules) => {
        let nextFractalArr = [];
        if (n === 0) {
            return rules.axiom;
        } else {
          	let fractalArr = this.calculateLSystem(n - 1, rules);
            fractalArr.forEach((el) => {
                if (el === 'A') {
                    let tempFractalArr = rules.setA;
                    tempFractalArr.forEach((ruleEl) => {nextFractalArr.push(ruleEl)});
                } else if (el === 'B') {
                    let tempFractalArr = rules.setB;
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
            p.frameRate(15)
        }

        p.drawAThing = (segLen) => {
            p.clear()
            p.rect(150,150,segLen*10,segLen*10)
        }

        p.drawLSystem = (fractalArr, initLen, segLen, theta, minSegLen, translateNum) => {
            const fractalArrLen = fractalArr.length
            const randomCol = '#'+Math.floor(Math.random()*16777215).toString(16);
            const translateX = (500 / initLen) + this.factorial(initLen) * translateNum
            const translateY = translateX
            console.log(translateX)
            p.resetMatrix()
            p.translate(translateX, translateX)
            p.scale( translateNum * 0.1 )
  
            
            if (initLen > minSegLen) {

                // p.push()
                for (let i = 0; i < fractalArrLen; i++) {
                    const el = fractalArr[i];
    
                    if (el === 'A') {
                        p.stroke(randomCol)
                        p.line(0, 0, 0, -segLen);
                        p.translate(0, -segLen);
                    } else if (el === 'B') {
                        p.translate(segLen, 0)
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
                
                // p.pop();
                segLen *= 0.5;
            }
           
        }
    
        p.draw = () => {
        }
    }
    


    render() {        
   
        return (
            <>
            <h2>Henlo, I am the canvas!</h2>
            <p>I have a blue dotted border. I do not work yet.</p>
            <div
                className="canvas-container"
                ref={this.myRef}
            ></div>
            </>
        )
    }

} // end of FractalCanvas class

export default FractalCanvas;