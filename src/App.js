import React, {useState, useEffect} from 'react';
import Timer from './timer/Timer.js'
import Clock from './clock/Clock.js'
import './App.css';

const App = () => {
  const [play, setPlay] = useState(false)

  //handleClick method - Play/Pause
  const handleClick = () => {
      setPlay((prev) => !prev)
  }

  return (
    <div className="content grid">
      <h1 className="title">POMODOMO</h1>
      <button onClick={handleClick}>{!play ? 'play' : 'pause'}</button>
      <Timer hour={0} minute={0} second={10} play={play}/>
    </div>
  )
}

export default App;
