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
            let newTime = time
            if(!props.play){
                newTime = {
                    hour: time.hour,
                    minute: time.minute,
                    second: time.second                
                }
            }

            // Time has finished
            else if(time.hour === 0 && time.minute == 0 && time.second === 0){
                props.parentCallback(!props.work)

                newTime = (!props.work) ? {
                    hour: props.studyTime.hour,
                    minute: props.studyTime.minute,
                    second: props.studyTime.second                
                } : {
                    hour: props.breakTime.hour,
                    minute: props.breakTime.minute,
                    second: props.breakTime.second  
                }
            } else {
                let newSecond = time.second > 0 ? time.second-1 : 59
                let newMinute = time.second > 0 ? time.minute : time.minute-1
                newTime = {
                    hour: time.hour,
                    minute: newMinute,
                    second: newSecond                
                }
            }
            setTime(newTime)
            
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

