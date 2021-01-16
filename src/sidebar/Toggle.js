import React, {useState, useEffect} from 'react';
import './Toggle.css';

const Toggle = ({open, setOpen}) => {
    
    const handleClick = (e) => {
        console.log("pressed the toggle button.")
    }
    return(
        <div className="hamburger-icon" onClick={()=>setOpen(!open)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
        

    )
}

export default Toggle;