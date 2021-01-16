import React, {useState, useEffect} from 'react';
import './Clock.css';
import Tomato from './Tomato3.svg';
import styled, { keyframes, props } from 'styled-components';

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
    transform-origin: 50% 105px;
    animation: ${mymove} linear;
    animation-duration: 60s;
    animation-iteration-count: ${props => props.minutes};
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
    lefT: 50%;
    margin-left: -1px;
    border-radius: 50px;
    transform-origin: 50% 125px;
    animation: ${mymove} linear;
    animation-duration: ${props => props.minutes};
    animation-iteration-count: 1;
    animation-play-state: ${props => props.playState ? 'running' : 'paused'};
}
`;

//takes in some props that tell you what to start the timer at
const Clock = ({studyTime, breakTime, play}) => {
    let animationDurationInMinutes = (studyTime.minute * 60).toString() + "s"
    console.log(animationDurationInMinutes)
    
    return(
        <div>
            <div className="ticker-wrapper">
                <div className="clock">
                    <div className="dot"></div>
                    <div>
                        <MinuteTick minutes={animationDurationInMinutes} playState={play}></MinuteTick>
                        <SecondTick minutes={studyTime.minute} className='second-tick' playState={play}></SecondTick>
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