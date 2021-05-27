import React, {useState, useEffect} from 'react';
import './Clock.css';

const IntervalText = ({intervals, work}) => {

    const [text, setText] = useState("")

    useEffect(() => {
        if(work == false) {
            setText("Break Time")
        } else {
            setText("Interval " + intervals)
        }
    })

    return(
        <div className="interval-text">
            <p>{text}</p>
        </div>
    )
}

export default IntervalText;