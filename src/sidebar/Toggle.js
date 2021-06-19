import React from 'react';
import styled from 'styled-components';

import './Toggle.css';

const Toggle = ({open, setOpen, theme}) => {

    const MenuToggle = styled.div`
      width: 45px;
      position: absolute;
      top: 3%;
      left: 95%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 2rem;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;
      
      div {
        display: flex;
        
        span {
          display: block;
          width: 50%;
          height: 5px;
          margin-top: 5px;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
          background-color: ${props => {return props.currentTheme === "dark" ? "white" : "black"}};
        }
      }
    `

    function handleOnClick() {
        // Set the state of the menu to open
        setOpen(!open)

        // Animate the menu to a X
        let menu = document.getElementById("menu-toggler")
        console.log(menu)
        menu.classList.toggle("open")
    }

    return(
        <MenuToggle currentTheme={theme} onClick={handleOnClick} id="menu-toggler">
            <div className="menu-toggler__line">
                <span/>
                <span/>
            </div>
            <div className="menu-toggler__line">
                <span/>
                <span/>
            </div>
            <div className="menu-toggler__line">
                <span/>
                <span/>
            </div>
        </MenuToggle>
    )

}

export default Toggle;