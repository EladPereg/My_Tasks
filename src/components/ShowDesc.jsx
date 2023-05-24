import React from 'react'

export default function ShowDesc(props) {
    return (
        <div id='light_window'>
            <div id='light_inside'>
                <h2 style={{color:'black',marginTop:'-5px'}}>Description:</h2>
                <h3 style={{color:'black'}}>{props.myDesc}</h3>
                <button id='infoBtn' onClick={() => { props.setShowInfo(false) }}>close</button>
            </div>
        </div>
    )
}
