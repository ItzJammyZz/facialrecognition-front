import React from "react";
import "./Navigation.css"
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PersonIcon from '@material-ui/icons/Person';
import HowToRegIcon from '@material-ui/icons/HowToReg';

function Navigation({ onRouteChange, isSignedIn }) {
    if (isSignedIn) {
      return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <DirectionsRunIcon fontSize="large" onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer"/>
      <p class="signout">Sign Out</p>
    </nav>
    );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', margin: '10px'}}>
     <PersonIcon fontSize="large" onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer" />
     <p class="signin">Sign In</p>
     <HowToRegIcon fontSize="large" onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer"/>
     <p class="register">Register</p>  
        </nav>
      );
    }
}

export default Navigation;
