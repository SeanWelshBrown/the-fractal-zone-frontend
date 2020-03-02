import React from 'react';
import SavedPattern from '../Components/SavedPattern';

const Gallery = (props) => {

    const savedPatternComponents = () => {
        // this is just so there's some stuff on the page
        let seedPatternComponents = []
        for (let i = 0; i < 4; i++) {
            seedPatternComponents.push(<SavedPattern />)
        }
        return seedPatternComponents

        
    //    return this.props.savedPatterns.map((savedPattern) => 
    //        <SavedPattern />
    //    )
    
    }

    return(
        <div className="gallery">
            <h4>Here there will be saved patterns.</h4>
            {savedPatternComponents()}
        </div>
    )


} // end of Gallery fn

export default Gallery;