import React, {useState, useEffect} from 'react';
import Timer from './timer/Timer.js'
import Clock from './clock/Clock.js'
import Toggle from './sidebar/Toggle.js'
import Menu from './sidebar/Menu.js'
import GlobalStyles from './styled-components/global.js'
import './App.css';

const App = () => {
  const [play, setPlay] = useState(false)
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  const [studyTime, setStudyTime] = useState({
    hour: 0,
    minute: 5,
    second: 0
  })
  const [breakTime, setBreakTime] = useState({
    hour: 0,
    minute: 1,
    second: 0
  })


  //handleClick method - Play/Pause
  const handleClick = (e) => {
      setPlay((prev) => !prev)
      console.log(e.target)
      document.getElementsByClassName("o-play-btn")[0].classList.toggle('o-play-btn--playing')
  }

  return (
    <div className="content">
      <GlobalStyles></GlobalStyles>
      <h1 className="title">POMODOMO</h1>
      <Toggle open={open} setOpen={setOpen}></Toggle>
      <Menu open={open} studyTime={studyTime} setStudyTime={setStudyTime} breakTime={breakTime} setBreakTime={setBreakTime}></Menu>
      <Clock studyTime={studyTime} breakTime={breakTime} play={play}/>
      <button onClick={handleClick} className="o-play-btn">
        <i className="o-play-btn__icon">
          <div className="o-play-btn__mask"></div>
        </i>
      </button>
      <Timer studyTime={studyTime} breakTime={breakTime} play={play}/>
    </div>
  )
}

<button className="o-play-btn">

</button>
export default App;
