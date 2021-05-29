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
  const [totalIntervals, setTotalIntervals] = useState(8)
  const [finishedIntervals, setFinishedIntervals] = useState(false)
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
    // Set to the opposite (play -> pause and vv)
    setPlay((prev) => !prev)
    document.getElementsByClassName("o-play-btn")[0].classList.toggle('o-play-btn--playing')

    // If restarted, then this needs to reset restart back to false
    if(restart === true) {
      setRestart(false)
    }
  }

  /**
   * Restart the timer/clock/intervals
   */
  const handleRestart = (e) => {
      setRestart((restart) => {
        if(restart == false) {
          // Set the play button to pause
          setPlay(false)
          document.getElementsByClassName("o-play-btn")[0].classList.toggle('o-play-btn--playing')
          return true
        }
      })
  }

  /**
   * Toggle the work hook depending on the Timer.
   */
  const callbackSetWork = (workBool) => {

    console.log("Calling callbackSetwork")

    // Change the work boolean to the opposite (play -> pause)
    setWork(workBool)

    // Increase the interval
    console.log("Intervals " + intervals)
    setIntervals((prev) => prev + 1 - 1)

    // If the interval is past the max, then refresh
    console.log("Total intervals " + totalIntervals)
    if(intervals > totalIntervals) {
      setRestart((restart) => {
        if(restart == false) {
          // Set the play button to pause
          setPlay(false)
          document.getElementsByClassName("o-play-btn")[0].classList.toggle('o-play-btn--playing')
          return true
        }
      })
      console.log("Finished all intervals")
    }
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
             play={play}
             work={work} 
             parentCallback={callbackSetWork}
             restart={restart} />
      <IntervalText intervals={intervals}
                    work={work}
                    restart={restart}/>
    </div>
  )
}

export default App;
