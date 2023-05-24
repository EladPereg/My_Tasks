import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const nav = useNavigate()

    const deleteOne = () => {
        if (name.length == 0 || password.length == 0 || title.length == 0) {
            alert('please fill in all text box')
        }
        else {
            let id = 0
            let user = props.tasks.find((val) => { return val.name == name && val.password === password && val.title === title })
            if (user == undefined) {
                alert('One of the details is incorrect')
            }
            else {
                id = user.id
                fetch(`http://localhost:3500/tasks/${id}`, {
                    method: 'DELETE',
                })
                props.setFlag(!props.flag)
                nav('/')
            }
        }
    }

    return (
        <div>
            <h2 id='h2DeletePge'>Here you can delete your task from the system</h2>
            <div id='deleteTaskDiv'>
                <input className='addInps' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='name' /> <br />
                <input className='addInps' onChange={(e) => { setPassword(e.target.value) }} type='text' placeholder='password' /> <br />
                <input className='addInps' onChange={(e) => { setTitle(e.target.value) }} type='text' placeholder='title' /> <br />
                <button onClick={deleteOne} id='deleteBtn'>Delete</button>
            </div>
        </div>
    )
}