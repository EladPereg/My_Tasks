import React from 'react'

export default function AllTasks(props) {
  return (
    <div>
      <h1 id='H1AllTasks'>Welcome ! here you can see all the tasks</h1>
      <div id='homePageTasks1'>
        <div id='homePageTasks2' >
          {props.showTask()}
        </div>
      </div>
    </div>
  )
}
