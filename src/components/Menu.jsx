import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
  const click=()=>{
    props.setFlag(!props.flag)
  }
  return (
    <div>
      <div id='menu'>
        <Link to='/'><button onClick={()=>{return props.flag ==true?click():''}} className="navBarBtn">All Tasks</button></Link> <br />
        <Link to='/add'><button onClick={()=>{return props.flag ==true?click():''}} className="navBarBtn">Add New Task</button></Link> <br />
        <Link to='/delete'><button onClick={()=>{return props.flag ==true?click():''}} className="navBarBtn">Delete Task</button></Link> <br />
        <Link to='/mytasks'><button onClick={()=>{return props.flag ==true?click():''}} className="navBarBtn">My Tasks</button></Link> <br />
      </div>
    </div>
  )
}
