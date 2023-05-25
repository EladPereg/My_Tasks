import React, { useState } from 'react'
import Menu from './Menu'

export default function NavBar(props) {
    const [flag, setFlag] = useState(false)

    const showMenu = () => {
        if (flag == true) {
            return <Menu setFlag={setFlag} flag={flag}/>
        }
        else{
            return null
        }
    }

    return (
        <div>
            <div id="hamburger">
                <button onClick={() => {setFlag(!flag) }} id="btnburger"></button>
            </div>
            {showMenu()}
        </div>
    )
}
