import React, {useState, useEffect} from 'react';
import './Clock.css';

const IntervalText = (props) => {

    const [text, setText] = useState("")    

    // Set the interval back to 1
    useEffect(() => {
        if(props.restart === true) {
            setText("Interval 1")
        }
    }, [props.restart])

    // Set text depending on working or breaking
    useEffect(() => {
        console.log("Setting interval text " + props.intervals)
        if(props.work === false) {
            setText("Break Time")
        } else {
            setText("Interval " + (props.intervals))
        }
    }, [props.work, props.intervals])

    return(
        <div className="interval-text">
            <p>{text}</p>
        </div>
    )
}

export default IntervalText;