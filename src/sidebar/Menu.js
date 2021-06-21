import React, {useEffect} from 'react';
import styled from 'styled-components';
import './Menu.css';

const TimeInput = styled.input`
  font-family: 'Heebo', sans-serif;
  border: none;
  width: 40px;
  font-size: 25px;
  background-color: transparent;
  color: ${props => {return props.theme === "dark" ? "white" : "black"}}
`


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
            if(event.target.id === "study-hours"){
                return {
                    hour: event.target.value,
                    minute: props.studyTime.minute,
                    second: props.studyTime.second
                }
            } else if(event.target.id === "study-minutes"){
                return {
                    hour: props.studyTime.hour,
                    minute: event.target.value,
                    second: props.studyTime.second
                }
            } else if(event.target.id === "study-seconds"){
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
            if(event.target.id === "break-hours"){
                return {
                    hour: event.target.value,
                    minute: props.breakTime.minute,
                    second: props.breakTime.second
                }
            } else if(event.target.id === "break-minutes"){
                return {
                    hour: props.breakTime.hour,
                    minute: event.target.value,
                    second: props.breakTime.second
                }
            } else if(event.target.id === "break-seconds"){
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

    return(
        <aside className="menu-container"> 
            <div open={props.open} id="menu" className="menu">
                <div className="descriptor">THEME</div>
                <div>
                    <label className="switch" >
                        <input type="checkbox" onClick={handleThemeToggle}/>
                        <span className="slider round"/>
                    </label>
                </div>
                <div className="descriptor">STUDY TIME</div>
                <div className="description">
                    <form className="time-inputs">
                        <TimeInput theme={props.theme} placeholder="00" className="start-time" id="study-hours" onInput={handleStudyInput}/>
                        <span>:</span>
                        <TimeInput theme={props.theme} placeholder="25" className="start-time" id="study-minutes" onInput={handleStudyInput}/>
                        <span>:</span>
                        <TimeInput theme={props.theme} placeholder="00" className="start-time" id="study-seconds" onInput={handleStudyInput}/>
                    </form>
                </div>
                <div className="descriptor">BREAK TIME</div>
                <div className="description">
                    <form className="time-inputs">
                        <TimeInput theme={props.theme} placeholder="00" className="start-time" id="break-hours" onInput={handleBreakInput}/>
                        <span>:</span>
                        <TimeInput theme={props.theme} placeholder="05" className="start-time" id="break-minutes" onInput={handleBreakInput}/>
                        <span>:</span>
                        <TimeInput theme={props.theme} placeholder="00" className="start-time" id="break-seconds" onInput={handleBreakInput}/>
                    </form>
                </div>
                <div className="descriptor">INTERVALS</div>
                <div className="description">
                    <form className="intervals">
                        <TimeInput theme={props.theme} type="number" placeholder="4" className="intervals" id="intervals" onInput={handleIntervalInput}/>
                    </form>
                </div>
            </div>   
        </aside>
    )
}

export default Menu;