import React, {useEffect} from 'react';

import './Toggle.css';

const Toggle = ({open, setOpen, theme}) => {

    useEffect(() => {
        let menu = document.getElementById("menu-toggler")
        if(theme === "dark") {
            menu.classList.add("dark")
        } else {
            menu.classList.remove("dark")
        }
    }, [theme])

    function handleOnClick() {
        // Set the state of the menu to open
        setOpen(!open)

        // Animate the menu to a X
        let menu = document.getElementById("menu-toggler")
        menu.classList.toggle("open")
    }

    return(
        <div onClick={handleOnClick} id="menu-toggler">
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
        </div>
    )

}

export default Toggle;