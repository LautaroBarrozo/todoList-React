import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddButton from './components/ButtonAdd/AddButton'
import MainContainer from './components/container/MainContainer'
import DeleteButtonContainer from './components/DeleteButtonContainer/DeleteButtonContainer'
import DeleteTasksButton from './components/DeleteTasksButton/DeleteTasksButton'
import InputButtonContainer from './components/Input-button-Container/Input-Button-Container'
import TodoInput from './components/input/TodoInput'
import Navbar from './components/navbar/Navbar'
import Task from './components/task/Task'

import TaskContainer from './components/TasksContainer/TaskContainer'
import { GlobalStyles } from './global-styles/GlobalStyles'

function App() {

let tareas = JSON.parse(localStorage.getItem('tasks')) || []

const saveLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}

const [tasks, setTasks] = useState(tareas)

const getInput = (e) => {
  e.preventDefault()
  const value = e.target.todo.value
  setTasks([...tasks, value])
}

saveLocalStorage(tasks)

const deleteTasks = () => {
  setTasks([])
}

  return (
    <>
      <Navbar></Navbar>

      <MainContainer>

        <InputButtonContainer getInput={getInput}>
          <TodoInput></TodoInput>
          <AddButton></AddButton>
        </InputButtonContainer>

        <TaskContainer>
          {tasks.map((tarea) => <Task key={tarea} title={tarea}></Task> )}
        </TaskContainer>

        <DeleteButtonContainer>
          <DeleteTasksButton deleteTasks={deleteTasks}></DeleteTasksButton>
        </DeleteButtonContainer>
        

      </MainContainer>

      <GlobalStyles></GlobalStyles>
    </>
  )
}

export default App
