import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddNewTask(props) {
    const nav = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const sentData = (e) => {
        e.preventDefault(); /*מונע ריענון של העמוד ובכך הנתונים לא נמחקים */
        let checkingUser = props.tasks.find((val) => { return val.password === password && val.name!=name})
        let checkiTile = props.tasks.find((val) => { return val.title === title })
        if (checkingUser != null) {
            alert('This user already exists in the system, please choose another details')
        }
        else if(checkiTile!=null){
            alert('This title already exists in the system, please choose another title')
        }
        else {
            if (title.length == 0 || desc.length == 0 || password.length == 0 || desc.length == 0) {
                alert('please fill in all text box')
            }
            else {
                const obj = { name, password, title, desc }

                fetch('http://localhost:3500/tasks', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(obj)
                })
                    .then(() => {
                        console.log('new task added')
                        props.setFlag(!props.flag)
                        nav('/')
                    })
            }
        }
    }
    return (
        <div>
            <div id='h2AddNewTaskDiv'>
            <h2 id='h2AddNewTask'>here you can add your new task </h2>
            </div>
        <div id='addNewTaskDiv'>
        <form onSubmit={sentData}>
            <input className="addInps" onChange={(e) => { setName(e.target.value) }} type="text" placeholder='name' /> <br />
            <input className="addInps" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password' /><br />
            <input className='addInps' onChange={(e) => { setTitle(e.target.value) }} type='text' placeholder='title' /> <br />
            <textarea onChange={(e) => { setDesc(e.target.value) }} type='text' placeholder='desc' /> <br />
            <button className='addBtn'>add</button>
        </form>
        </div>
        </div>
    )
}
