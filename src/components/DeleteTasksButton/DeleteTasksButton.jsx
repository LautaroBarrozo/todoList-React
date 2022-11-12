import React from 'react'
import styled from 'styled-components'

const DeleteButton = styled.button`
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


const DeleteTasksButton = ({deleteTasks}) => {
  return (
    <DeleteButton onClick={deleteTasks}>Eliminar tareas</DeleteButton>
  )
}

export default DeleteTasksButton