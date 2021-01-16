import React, {useState, useEffect} from 'react'
import './Timer.css';

const Timer = ({studyTime, breakTime, play}) => {
    const [time, setTime] = useState({
        hour: studyTime.hour,
        minute: studyTime.minute, 
        second: studyTime.second
    })

    const [work, setWork] = useState(true)

    useEffect(() => {
        setTime(() => {
            return {
                hour: studyTime.hour,
                minute: studyTime.minute,
                second: studyTime.second
            }
        })
    }, [studyTime])

    //set the time each second
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prev) => {
                if(!play){
                    return {
                        hour: prev.hour,
                        minute: prev.minute,
                        second: prev.second                
                    }
                }
                if(time.hour === 0 && time.minute === 0 && time.second === 0){
                    console.log(breakTime)
                    console.log("go to break")
                    setWork(!work)
                    return !work ? {
                        hour: studyTime.hour,
                        minute: studyTime.minute,
                        second: studyTime.second                
                    } : {
                        hour: breakTime.hour,
                        minute: breakTime.minute,
                        second: breakTime.second  
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
    }, [time, setTime, studyTime, breakTime, play, work])



    return(
        <div className="timer">
            <h1 className="timer-text">{time.hour.toString().padStart(2, '0')}:
            {time.minute.toString().padStart(2, '0')}:
            {time.second.toString().padStart(2, '0')}</h1>
        </div>

    )
}

export default Timer

