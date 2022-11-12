import React from 'react'
import styled from 'styled-components'

const ContainerTasks = styled.div`
background-color: var(--black);
width: 100%;
height: 20rem;
gap: 1rem;
overflow-y: scroll;


display: flex;
align-items: center;
flex-direction: column;

`


const TaskContainer = ({children}) => {
  return (
    <ContainerTasks>{children}</ContainerTasks>
  )
}

export default TaskContainer