import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 15rem;
    height: 2rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    border: none;
`


const TodoInput = () => {
  return (
    <Input placeholder='ingrese su tarea' name='todo'></Input>
  )
}

export default TodoInput