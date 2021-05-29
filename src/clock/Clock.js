import React, {useState, useEffect} from 'react';
import './Clock.css';
import Tomato from './Tomato3.svg';
import styled, { keyframes} from 'styled-components';

const mymove = keyframes`
    from {
        transform: rotate(0deg);
        transform-origin: bottom left;
    }
    to {
        transform: rotate(360deg);
        transform-origin: bottom left;
    }
`;

const SecondTick = styled.div`
    position: absolute;
    z-index: 6;
    width: 4px;
    height: 100px;
    background: #666;
    top: 46px;
    left: 50%;
    margin-left: -2px;
    border-radius: 50px;
    animation: ${mymove};
    transition-timing-function: linear;
    animation-duration: ${props => props.minutes};
    animation-iteration-count: ${props => props.iterations};
    animation-play-state: ${props => props.playState ? 'running' : 'paused'};
}
`;

const MinuteTick = styled.div`
    position: absolute;
    z-index: 7;
    width: 5px;
    height: 120px;
    background: gold;
    top: 26px;
    left: 50%;
    margin-left: -1px;
    border-radius: 50px;
    animation: ${mymove};
    transition-timing-function: linear;
    animation-duration: ${props => props.minutes};
    animation-iteration-count: 1;
    animation-play-state: ${props => props.playState ? 'running' : 'paused'};
}
`;

const Clock = (props) => {

    const [minuteKey, setMinuteKey] = useState("0");
    const [secondKey, setSecondKey] = useState("-1");

    useEffect(() => {
        // Restarting the clock hands back to the original position
        if(props.restart === true) {
            document.getElementById("minute").classList.add("remove-animation")
            document.getElementById("second").classList.add("remove-animation")
        } else {
            document.getElementById("minute").classList.remove("remove-animation")
            document.getElementById("second").classList.remove("remove-animation")
        }

    }, [props.restart])

    useEffect(() => {
        // Change the keys of the hands (that way they re-render)
        var minKey = Math.random().toString();
        var secKey = Math.random().toString();
        setMinuteKey(minKey)
        setSecondKey(secKey)
    }, [props.work])

    let animationDurationForMinuteTick = ""
    let animationDurationForSecondTick = ""
    let animationIterationForSecondTick = ""

    // Break time
    if(!props.work) {
        animationDurationForMinuteTick = (props.breakTime.minute * 60).toString() + "s"
        animationDurationForSecondTick = "60s"
        animationIterationForSecondTick = (props.breakTime.minute).toString() + "s"

        if(animationDurationForMinuteTick === "0s") {
            animationDurationForSecondTick = (props.breakTime.second).toString() + "s"
            animationIterationForSecondTick = 1
        }
    } else {
        animationDurationForMinuteTick = (props.studyTime.minute * 60).toString() + "s"
        animationDurationForSecondTick = "60s"
        animationIterationForSecondTick = (props.studyTime.minute).toString() + "s"

        // If the time is less than 1 minute, the minute tick should not move.
        if(animationDurationForMinuteTick === "0s") {
            animationDurationForSecondTick = (props.studyTime.second).toString() + "s"
            animationIterationForSecondTick = 1
        }
    }
    
    return(
        <div>
            <div className="ticker-wrapper">
                <div className="clock">
                    <div className="dot"></div>
                    <div>
                        <MinuteTick id="minute" key={minuteKey} minutes={animationDurationForMinuteTick} className='minute-tick' playState={props.play}></MinuteTick>
                        <SecondTick id="second" key={secondKey} minutes={animationDurationForSecondTick} iterations={animationIterationForSecondTick} className='second-tick' playState={props.play}></SecondTick>
                    </div>
                </div>
            </div>
            <div className="main">
                <img className="tomato" src={Tomato} alt="tomato"/>
            </div>
        </div>
    )
}

export default Clock;