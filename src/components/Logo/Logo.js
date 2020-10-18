import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ perspective: 300 }}
        style={{ height: 150, width: 150 }}
        
      >
        <div className="Tilt-inner"> 🤯 </div>
        <div className="Logo__Name">
        <a href="https://github.com/ItzJammyZz">  <h1>Jammy</h1> </a>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;

{/* <a href="https://github.com/ItzJammyZz">Jammy</a> */}