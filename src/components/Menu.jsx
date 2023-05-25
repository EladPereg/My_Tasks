import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [flag, setFlag] = useState(true)
  let menu = document.getElementById('menu')
  if (flag == true) {
    menu.classList.remove('None')
  }
  else {
    menu.classList.add('None')
  }

  return (
    <div>
      <div id='menu'>
        <Link to='/'><button onClick={() => { setFlag(!flag) }} className="navBarBtn">All Tasks</button></Link> <br />
        <Link to='/add'><button onClick={() => { setFlag(!flag) }} className="navBarBtn">Add New Task</button></Link> <br />
        <Link to='/delete'><button onClick={() => { setFlag(!flag) }} className="navBarBtn">Delete Task</button></Link> <br />
        <Link to='/mytasks'><button onClick={() => { setFlag(!flag) }} className="navBarBtn">My Tasks</button></Link> <br />
      </div>
      <div id="hamburger">
        <button onClick={() => { setFlag(!flag) }} id="btnburger"></button>
      </div>
    </div>
  )
}
