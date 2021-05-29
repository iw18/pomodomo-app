import React, {useState, useEffect} from 'react'
import './Timer.css';

const Timer = (props) => {
    
    const [time, setTime] = useState({
        hour: props.studyTime.hour,
        minute: props.studyTime.minute, 
        second: props.studyTime.second
    })

    // Set the study time depending on user inputed time (in menu)
    useEffect(() => {
        setTime(() => {
            return {
                hour: props.studyTime.hour,
                minute: props.studyTime.minute,
                second: props.studyTime.second
            }
        })
    }, [props.studyTime, props.restart])

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prev) => {
                if(!props.play){
                    return {
                        hour: prev.hour,
                        minute: prev.minute,
                        second: prev.second                
                    }
                }

                // Time has finished
                if(time.hour === 0 && time.minute == 0 && time.second === 0){
                    props.parentCallback(!props.work)

                    return (!props.work) ? {
                        hour: props.studyTime.hour,
                        minute: props.studyTime.minute,
                        second: props.studyTime.second                
                    } : {
                        hour: props.breakTime.hour,
                        minute: props.breakTime.minute,
                        second: props.breakTime.second  
                    }
                } else {
                    let newSecond = prev.second > 0 ? prev.second-1 : 59
                    let newMinute = prev.second > 0 ? prev.minute : prev.minute-1
                    return {
                        hour: prev.hour,
                        minute: newMinute,
                        second: newSecond                
                    }
                }
                
            })
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [time, setTime, props.studyTime, props.breakTime, props.play, props.work])



    return(
        <div className="timer">
            <h1 className="timer-text">{time.hour.toString().padStart(2, '0')}:
            {time.minute.toString().padStart(2, '0')}:
            {time.second.toString().padStart(2, '0')}</h1>
        </div>
    )
}

export default Timer

