import React, {Component} from 'react';
// import Tomato from './images/Tomato.svg';
import './Clock.css';

//takes in some props that tell you what to start the timer at
class Clock extends Component {
    render(){
        return(
            <div>
                <div className="ticker"></div>
            </div>

        )
    }
}

export default Clock;