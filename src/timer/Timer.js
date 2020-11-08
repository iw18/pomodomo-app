import React, {useState, useEffect} from 'react'

const Timer = (props) => {
    const [time, setTime] = useState({
        hour: props.hour,
        minute: props.minute, 
        second: props.second
    })

    const [work, setWork] = useState(true)

    //set the time each second
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
                if(time.hour === 0 && time.minute === 0 && time.second === 0){
                    console.log("go to break")
                    setWork(!work)
                    return !work ? {
                        hour: props.hour,
                        minute: props.minute,
                        second: props.second                
                    } : {
                        hour: 0,
                        minute: 5,
                        second: 0  
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
    }, [time, setTime, props.play, props.hour, props.minute, props.second, work])



    return(
        <div>
            <h1>{time.hour.toString().padStart(2, '0')}:
            {time.minute.toString().padStart(2, '0')}:
            {time.second.toString().padStart(2, '0')}</h1>
        </div>

    )
}

export default Timer

