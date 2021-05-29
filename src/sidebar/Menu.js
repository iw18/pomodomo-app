import React, {useState, useEffect} from 'react';
import './Menu.css';

const Menu = ({open, studyTime, setStudyTime, breakTime, setBreakTime, setTotalIntervals}) => {

    useEffect(() => {
        let menu = document.getElementById("menu")        
        if(open){
            menu.style.transform = "translateX(0)"
        } else {
            menu.style.transform = "translateX(100%)"
        }
    }, [open])

    const handleStudyInput = (event) => {
        console.log("handling input for."+event.target.id)
        setStudyTime(() => {
            if(event.target.id == "study-hours"){
                return {
                    hour: event.target.value,
                    minute: studyTime.minute,
                    second: studyTime.second
                }
            } else if(event.target.id == "study-minutes"){
                return {
                    hour: studyTime.hour,
                    minute: event.target.value,
                    second: studyTime.second
                }
            } else if(event.target.id == "study-seconds"){
                return {
                    hour: studyTime.hour,
                    minute: studyTime.minute,
                    second: event.target.value
                }
            }
        })
    }

    const handleBreakInput = (event) => {
        setBreakTime(() => {
            if(event.target.id == "break-hours"){
                return {
                    hour: event.target.value,
                    minute: breakTime.minute,
                    second: breakTime.second
                }
            } else if(event.target.id == "break-minutes"){
                return {
                    hour: breakTime.hour,
                    minute: event.target.value,
                    second: breakTime.second
                }
            } else if(event.target.id == "break-seconds"){
                return {
                    hour: breakTime.hour,
                    minute: breakTime.minute,
                    second: event.target.value
                }
            }
        })
    }

    // Set interval
    const handleIntervalInput = (event) => {
        setTotalIntervals(event.target.value * 2)
    }

    // Study music

    // Break music

    return(
        <div open={open} id="menu" className="menu">
            <div className="descriptor">THEME</div>
            <div>
                <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="descriptor">STUDY TIME</div>
            <div className="description">
                <form className="time-inputs">
                    <input placeholder="00" className="start-time" id="study-hours" onInput={handleStudyInput}></input>
                    <span>:</span>
                    <input placeholder="25" className="start-time" id="study-minutes" onInput={handleStudyInput}></input>
                    <span>:</span>
                    <input placeholder="00" className="start-time" id="study-seconds" onInput={handleStudyInput}></input>
                </form>
            </div>
            <div className="descriptor">BREAK TIME</div>
            <div className="description">
                <form className="time-inputs">
                    <input placeholder="00" className="start-time" id="break-hours" onInput={handleBreakInput}></input>
                    <span>:</span>
                    <input placeholder="05" className="start-time" id="break-minutes" onInput={handleBreakInput}></input>
                    <span>:</span>
                    <input placeholder="00" className="start-time" id="break-seconds" onInput={handleBreakInput}></input>
                </form>
            </div>
            <div className="descriptor">INTERVALS</div>
            <div className="description">
                <form className="intervals">
                    <input type="number" placeholder="4" className="intervals" id="intervals" onInput={handleIntervalInput}></input>
                </form>
            </div>
            <div className="descriptor">BACKGROUND MUSIC</div>
            <div className="description">Song.mp3
            </div>
            <div className="descriptor">BREAK MUSIC</div>
            <div className="description">Song.mp3
            </div>
        </div>        
    )
}

export default Menu;