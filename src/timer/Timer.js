import React, {useState, useEffect} from 'react'
import './Timer.css';

const Timer = ({studyTime, breakTime, intervals, totalIntervals, setIntervals, play, handlePlayPause, work, setWork, parentCallback}) => {
    
    const [time, setTime] = useState({
        hour: studyTime.hour,
        minute: studyTime.minute, 
        second: studyTime.second
    })

    const [workOrBreak, setWorkOrBreak] = useState(true);

    useEffect(() => {
        setTime(() => {
            return {
                hour: studyTime.hour,
                minute: studyTime.minute,
                second: studyTime.second
            }
        })
    }, [studyTime])

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

                console.log(time)

                // Time has finished
                if(time.hour === 0 && time.minute == 0 && time.second === 0){
                    setWork(!workOrBreak)
                    setWorkOrBreak(!workOrBreak)
                    console.log("Changing work" + workOrBreak)
                    if(work == true) {
                        setIntervals(intervals++)
                        console.log("Intervals: " + intervals)
                    }

                    // Finished all the intervals!
                    console.log("Intervals + " + intervals + "Total Intervals : " + totalIntervals)
                    if(intervals > totalIntervals) {
                        console.log("Finished all of the intervals")
                        handlePlayPause(null)
                        clearInterval()
                    }
                    return !setWorkOrBreak ? {
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
    }, [time, setTime, studyTime, breakTime, play, setWorkOrBreak])



    return(
        <div className="timer">
            <h1 className="timer-text">{time.hour.toString().padStart(2, '0')}:
            {time.minute.toString().padStart(2, '0')}:
            {time.second.toString().padStart(2, '0')}</h1>
        </div>
    )
}

export default Timer

