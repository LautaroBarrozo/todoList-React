import React from 'react'
import styled from 'styled-components'

const AddTaskButton = styled.button`
height: 2rem;
width: 6rem;
border-radius: 0.5rem;
cursor: pointer;
border: none;

&:hover{
    transition: 1s;
    background-color: var(--orange);
}
`


const AddButton = () => {
  return (
    <AddTaskButton>añadir tarea</AddTaskButton>
  )
}

export default AddButton