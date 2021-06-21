import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled-components/theme.js';
import Timer from './timer/Timer.js'
import Clock from './clock/Clock.js'
import IntervalText from './clock/IntervalText.js'
import Toggle from './sidebar/Toggle.js'
import Menu from './sidebar/Menu.js'
import GlobalStyles from './styled-components/global.js'
import Restart from './images/replay.svg'
import './App.css';

const ButtonContainer = styled.div`
  display: flex;
  margin: 2% auto;
`

const PlayPauseButton = styled.button`
  width: 25px;
  border-style: solid;
  background-color: ${props => {return props.theme === "dark" ? "#333" : "white"}};
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;
  outline: none;
  
  ${props => {
    if(!props.play && props.theme === "dark") {
        return`
            height: 25px;
            box-sizing: border-box;
            border-width: 25px 0 25px 40px;
            border-color: #333 #333 #333 white;
        `
    } else if(!props.play && props.theme === "light") {
      return`
            height: 25px;
            box-sizing: border-box;
            border-width: 25px 0 25px 40px;
            border-color: white white white #202020;
        `
    }
    else if(props.play && props.theme === "dark") {
      return`
          height: 54px;
          border-color: white;
          border-style: double;
          border-width: 0px 0px 0px 37px;
      `
    }
    else if(props.play && props.theme === "light") {
      return`
          height: 54px;
          border-color: #202020;
          border-style: double;
          border-width: 0px 0px 0px 37px;
      `
    }
  }}
`;

const ReplayButton = styled.img`
    width: 60px;
    filter: ${props => {return props.theme === "dark" ? "invert(1)" : ""}};
`;


const App = () => {
  const [play, setPlay] = useState(false)
  const [open, setOpen] = useState(false)
  const [work, setWork] = useState(true) // 0 = Study, 1 = Break, 2 = Refresh/Finished Intervals
  const [intervals, setIntervals] = useState(1)
  const [totalIntervals, setTotalIntervals] = useState(8)
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
  const [theme, setTheme] = useState('light')


  /**
   * Play/ Pause button handle click function 
   */
  const handlePlayPause = (e) => {
    // Set to the opposite (play -> pause and vv)
    setPlay((prev) => !prev)

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
        if(restart === false) {
          // Set the play button to pause
          setPlay(false)
          setWork(true)
          return true
        }
      })
  }

  /**
   * Toggle the work hook depending on the Timer.
   */
  const callbackSetWork = (workBool) => {

    // Change the work boolean to the opposite (play -> pause)
    setWork(workBool)

    // If the interval is past the max, then refresh
    console.log("Total intervals " + totalIntervals)
    if(intervals === totalIntervals) {
      setPlay(false)
      setRestart(true)
      
      // Reset all the intervals back to the beginning
      setIntervals(1)
    } else {
      // Increase the interval
      console.log("Intervals " + intervals)
      setIntervals((interval) => interval + 1)
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="content">
        <GlobalStyles/>
        <h1 className="title">POMODOMO</h1>
        <Clock studyTime={studyTime} 
              breakTime={breakTime} 
              play={play} 
              work={work}
              restart={restart} />
        <Toggle open={open} 
                setOpen={setOpen}
                theme={theme}/>
        <Menu open={open} 
              studyTime={studyTime} 
              setStudyTime={setStudyTime} 
              breakTime={breakTime} 
              setBreakTime={setBreakTime} 
              setTotalIntervals={setTotalIntervals}
              theme={theme}
              setTheme={setTheme}/>
        <ButtonContainer>
          <PlayPauseButton play={play} theme={theme} onClick={handlePlayPause}/>
          <ReplayButton theme={theme} src={Restart} onClick={handleRestart}/>
        </ButtonContainer>
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
    </ThemeProvider>
  )
}

export default App;
