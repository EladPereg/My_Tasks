import React, { useState } from 'react'
import ShowDesc from './ShowDesc'

export default function MyTasks(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [refresh, setRefresh] = useState(false)

    const check = () => {
        while (props.myTasksArr.length != 0) {
            props.myTasksArr.pop()
            props.setMyTasksArr(props.myTasksArr)
        }
        if (props.myTasksArr.length == 0) {
            for (let i = 0; i < props.tasks.length; i++) {
                if (props.tasks[i].name === name && props.tasks[i].password === password) {
                    props.myTasksArr.push(props.tasks[i])
                    console.log(props.myTasksArr)
                }
                props.setMyTasksArr(props.myTasksArr)
            }
        }
    }

    return (
        <div id='responsMyTaskDiv'>
            <h2 id='h2MyTaskPage'>Here you can see your personal tasks</h2>
        <div id='myTasksDiv'>
            <input className='myTasksInp' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='name' /> <br />
            <input className='myTasksInp' onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password' /> <br />
            <button id='myTasksBtn' onClick={()=>{check();setRefresh(!refresh)}}>go</button> <br />
        </div>
        <div id='allPersonalTasks'>
            {props.showTasks()}
        </div>
            {props.showInfo === true ? <ShowDesc myDesc={props.myDesc} setShowInfo={props.setShowInfo} /> : ''}
        </div>
    )
}