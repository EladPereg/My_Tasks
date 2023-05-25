import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllTasks from './components/AllTasks';
import AddNewTask from './components/AddNewTask';
import Delete from './components/Delete';
import MyTasks from './components/MyTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3500/tasks')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setTasks(data)
      })
  }, [flag])

  const showTask = () => {
    if (tasks.length === 0) {
      return <h1>no tasks yet</h1>
    }
    else {
      return tasks.map((task) => {
        return <div id='workertData' key={task.id}>
          <h2>Worker Name: </h2>
          <h3 style={{marginTop:'-20px'}}>{task.name}</h3>
          <h3>Mission Name: </h3>
          <h3 style={{marginTop:'-20px'}}>{task.title}</h3>
          <h5>Description: </h5>
          <h5 style={{marginTop:'-20px'}}>{task.desc}</h5>
        </div>
      })
    }
  }

  const [myTasksArr,setMyTasksArr]=useState([]);
  const [myDesc, setMyDesc] = useState('');
  const [showInfo, setShowInfo] = useState(false)
  const addToArr = (obj) => {
    setMyTasksArr([...myTasksArr,obj])
  }
  const showDesc = (desc) => {
    setMyDesc(desc)
    console.log(myDesc)
}

  const showTasks = () => {
    if (myTasksArr.length > 0) {
      return myTasksArr.map((val) => {
        return <div >
        <div id='privateMission'>
                <h2>mission title: {val.title}</h2>
                <h3>worker name: {val.name} </h3>
                <button id='privateMissionBtn' onClick={() => { showDesc(val.desc); setShowInfo(true) }}>show desc</button>
            </div>
        </div> 
        })
      }
      else{
        return <h1>no tasks yet</h1>
      }
}
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='*' element={<AllTasks showTask={showTask} />} />
          <Route path='/add' element={<AddNewTask setFlag={setFlag} flag={flag} tasks={tasks}/>} />
          <Route path='/delete' element={<Delete setFlag={setFlag} flag={flag} tasks={tasks} />} />
          <Route path='/mytasks' element={<MyTasks setFlag={setFlag} flag={flag} tasks={tasks}  
          addToArr={addToArr} setMyTasksArr={setMyTasksArr} myTasksArr={myTasksArr} showTasks={showTasks} setShowInfo={setShowInfo} showInfo={showInfo} myDesc={myDesc}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
