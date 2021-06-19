import React, {useState, useEffect} from 'react';
import './Toggle.css';

const Toggle = ({open, setOpen}) => {

    return(
        <label className="hamburger-icon" onClick={()=>setOpen(!open)}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </label>
    )

}

export default Toggle;