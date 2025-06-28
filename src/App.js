import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:4900/tasks`)
    const data = await res.json()

    console.log(data)
    return data;
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4900/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data;
  }

  //Add Task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    const res = await fetch(`http://localhost:4900/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data])
  }
  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4900/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:4900/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application.json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <Router>
      <div className="container">
        <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />


        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (
                'No Task to Show')
              }
            </>
          }/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
