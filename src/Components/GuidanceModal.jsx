import React, { useState } from "react"

const GuidanceModal = (props) => {


        if (props.showGuidanceModal === false) {
            return null
        } else {
        return (
        <div className="modal guidance">
            <div className="modal-content">
                <h3 className="guidance-header">Terms:</h3>
                    <p><strong>Theta: </strong>This refers to the angle the lines turn.</p>
                    <p><strong>Length: </strong>This refers to the initial length of the line segment. It decreases with each generation.</p>
                    <p><strong>Axiom: </strong>This is the base rule.</p>
                    <p><strong>Ruleset F: </strong>For each encounter of 'F', these instructions are appended.</p>
                    <p><strong>Ruleset G: </strong>For each encounter of 'G', these instructions are appended.</p>
                <h3 className="guidance-header">Rule Definitions:</h3>
                    <p><strong>F: </strong>Move forward and draw a line.</p>
                    <p><strong>G: </strong>Move forward, but do not draw a line.</p>
                    <p><strong>+: </strong>Rotate at the angle defined by theta.</p>
                    <p><strong>-: </strong>Rotate at the angle opposite of theta.</p>
                    <p><strong>[: </strong>Save current state (push)</p> 
                    <p><strong>]: </strong>Return to saved state (pop)</p> 
                <h3 className="guidance-header">Some common branch designs:</h3> 
                    <p><strong>Theta: </strong>35</p>
                    <p><strong>Axiom: </strong>F</p>
                    <p><strong>Ruleset F: </strong>F[+FF][-FF]F[-F][+F]F</p>
                <br/>
                    <p><strong>Theta: </strong>22</p>
                    <p><strong>Axiom: </strong>G</p>
                    <p><strong>Ruleset F: </strong>FF</p>
                    <p><strong>Ruleset G: </strong>F-[[G]+G]+F[+FG]-G</p>
                <br/>
                    <p><strong>Theta: </strong>20</p>
                    <p><strong>Axiom: </strong>G</p>
                    <p><strong>Ruleset F: </strong>FF</p>
                    <p><strong>Ruleset G: </strong>F[+G]F[-G]+G</p>
                <button onClick={props.handleGuidanceModalClick}>-𝕏-</button>
                </div>
        </div>
         ) }
            }
export default GuidanceModal