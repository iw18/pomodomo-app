import React, {useState, useEffect} from 'react';
import Timer from './timer/Timer.js'
import Clock from './clock/Clock.js'
import IntervalText from './clock/IntervalText.js'
import Toggle from './sidebar/Toggle.js'
import Menu from './sidebar/Menu.js'
import GlobalStyles from './styled-components/global.js'
import Restart from './images/replay.svg'
import './App.css';

const App = () => {
  const [play, setPlay] = useState(false)
  const [open, setOpen] = useState(false)
  const [work, setWork] = useState(true) // 0 = Study, 1 = Break, 2 = Refresh/Finished Intervals
  const [intervals, setIntervals] = useState(1)
  const [totalIntervals, setTotalIntervals] = useState(4);
  const [restart, setRestart] = useState(false)
  const [studyTime, setStudyTime] = useState({
    hour: 0,
    minute: 25,
    second: 0
  })
  const [breakTime, setBreakTime] = useState({
    hour: 0,
    minute: 5,
    second: 0
  })


  /**
   * Play/ Pause button handle click function 
   */
  const handlePlayPause = (e) => {
      setPlay((prev) => !prev)
      document.getElementsByClassName("o-play-btn")[0].classList.toggle('o-play-btn--playing')
  }

  /**
   * Restart the timer/clock/intervals
   */
  const handleRestart = (e) => {
      setRestart((restart) => {
        if(restart == false) {
          return true
        }
      })
  }

  /**
   * Toggle the work hook depending on the Timer.
   */
  const callbackSetWork = (workBool) => {
    setWork(workBool)
  }

  return (
    <div className="content">
      <GlobalStyles></GlobalStyles>
      <h1 className="title">POMODOMO</h1>
      <Clock studyTime={studyTime} 
             breakTime={breakTime} 
             play={play} 
             work={work}
             restart={restart} />
      <Toggle open={open} 
              setOpen={setOpen}/>
      <Menu open={open} 
            studyTime={studyTime} 
            setStudyTime={setStudyTime} 
            breakTime={breakTime} 
            setBreakTime={setBreakTime} 
            setTotalIntervals={setTotalIntervals}/>
      <div className="play-and-restart">
          <button onClick={handlePlayPause} className="o-play-btn">
            <i className="o-play-btn__icon">
              <div className="o-play-btn__mask"></div>
            </i>
          </button>
          <img className="restart" src={Restart} alt="Restart" onClick={handleRestart}/>
      </div>
      <Timer studyTime={studyTime} 
             breakTime={breakTime} 
             intervals={intervals} 
             totalIntervals={totalIntervals} 
             setIntervals={setIntervals}
             play={play}
             handlePlayPause={handlePlayPause}
             work={work} 
             setWork={setWork} 
             parentCallback={callbackSetWork}
             restart={restart} />
      <IntervalText intervals={intervals}
                    work={work}/>
    </div>
  )
}

export default App;
