import React from 'react'
import "./ImageLinkFor.css";

const ImageLinkForm =({onInputChange, onButtonSubmit}) => {
    return (
        <div className="ImageLinkFor">
        <p>
        {'This Magic web app will detect faces in your pictures. Give it a whirl!'}        
        </p>    
        <div className="center">
            <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
            <button 
            className="buttonize w-30 grow f4 link ph3 pv2 dib white"
            onClick={onButtonSubmit}
            >Detect</button>
            </div>

        </div>
        </div>
    )
}

export default ImageLinkForm
