import React from "react"

const GuidanceModal = (props) => {

        if (props.showGuidanceModal === false) {
            return null
        } else {
        return (
        <div className="modal guidance">
            <div className="modal-content guidance-content">
                <h3 className="guidance-header">Terms:</h3>
                    <p><b>θ Theta: </b>This refers to the angle the lines turn.</p>
                    <p><b>Length: </b>This refers to the initial length of the line segment. It decreases with each generation.</p>
                    <p><b>Axiom: </b>This is the base rule.</p>
                    <p><b>Ruleset F: </b>For each encounter of 'F', these instructions are appended.</p>
                    <p><b>Ruleset G: </b>For each encounter of 'G', these instructions are appended.</p>

                <h3 className="guidance-header">Rule Definitions:</h3>
                    <p><b>F: </b>Move forward and draw a line.</p>
                    <p><b>G: </b>Move forward, but do not draw a line.</p>
                    <p><b>+: </b>Rotate at the angle defined by theta.</p>
                    <p><b>-: </b>Rotate at the angle opposite of theta.</p>
                    <p><b>[: </b>Save current state (push)</p> 
                    <p><b>]: </b>Return to saved state (pop)</p> 
                <h3 className="guidance-header">Some common branch designs:</h3> 
                    <p><b>θ: </b>35</p>
                    <p><b>Axiom: </b>F</p>
                    <p><b>Ruleset F: </b>F[+FF][-FF]F[-F][+F]F</p>
                <br/>
                    <p><b>θ: </b>22</p>
                    <p><b>Axiom: </b>G</p>
                    <p><b>Ruleset F: </b>FF</p>
                    <p><b>Ruleset G: </b>F-[[G]+G]+F[+FG]-G</p>
                <br/>
                    <p><b>θ: </b>20</p>
                    <p><b>Axiom: </b>G</p>
                    <p><b>Ruleset F: </b>FF</p>
                    <p><b>Ruleset G: </b>F[+G]F[-G]+G</p>
                <button onClick={props.handleGuidanceModalClick}>-𝕏-</button>
                </div>
        </div>
         ) }
            }
export default GuidanceModal