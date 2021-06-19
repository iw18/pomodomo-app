import React, {useState, useEffect} from 'react';
import './Menu.css';

const Menu = (props) => {

    useEffect(() => {
        let menu = document.getElementById("menu")        
        if(props.open){
            menu.style.transform = "translateX(0)"
        } else {
            menu.style.transform = "translateX(100%)"
        }
    }, [props.open])

    const handleThemeToggle = () => {
        console.log("Changing theme from : " + props.theme)
        // if the theme is not light, then set it to dark
        if (props.theme === 'light') {
            props.setTheme('dark');
        // otherwise, it should be light
        } else {
            props.setTheme('light');
        }
    }

    const handleStudyInput = (event) => {
        console.log("handling input for."+event.target.id)
        props.setStudyTime(() => {
            if(event.target.id == "study-hours"){
                return {
                    hour: event.target.value,
                    minute: props.studyTime.minute,
                    second: props.studyTime.second
                }
            } else if(event.target.id == "study-minutes"){
                return {
                    hour: props.studyTime.hour,
                    minute: event.target.value,
                    second: props.studyTime.second
                }
            } else if(event.target.id == "study-seconds"){
                return {
                    hour: props.studyTime.hour,
                    minute: props.studyTime.minute,
                    second: event.target.value
                }
            }
        })
    }

    const handleBreakInput = (event) => {
        props.setBreakTime(() => {
            if(event.target.id == "break-hours"){
                return {
                    hour: event.target.value,
                    minute: props.breakTime.minute,
                    second: props.breakTime.second
                }
            } else if(event.target.id == "break-minutes"){
                return {
                    hour: props.breakTime.hour,
                    minute: event.target.value,
                    second: props.breakTime.second
                }
            } else if(event.target.id == "break-seconds"){
                return {
                    hour: props.breakTime.hour,
                    minute: props.breakTime.minute,
                    second: event.target.value
                }
            }
        })
    }

    // Set interval
    const handleIntervalInput = (event) => {
        props.setTotalIntervals(event.target.value * 2)
    }

    // Study music

    // Break music

    return(
        <aside className="menu-container"> 
            <div open={props.open} id="menu" className="menu">
                <div className="descriptor">THEME</div>
                <div>
                    <label className="switch" >
                        <input type="checkbox" onClick={handleThemeToggle}></input>
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
                <div className="dropdown-songs">
                    <button className="dropdown-button">Select a Song</button>
                    <div className="dropdown-content">
                        <a href="#">None</a>
                        <a href="#">Add Song</a>
                    </div>
                </div>
                <div className="descriptor">BREAK MUSIC</div>
                <div className="dropdown-songs">
                    <button className="dropdown-button">Select a Song</button>
                    <div className="dropdown-content">
                        <a href="#">None</a>
                        <a href="#">Default Beep</a>
                        <a href="#">Add Song</a>
                    </div>
                </div>
            </div>   
        </aside>
    )
}

export default Menu;