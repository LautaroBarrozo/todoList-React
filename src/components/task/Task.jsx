import React from 'react'
import styled from 'styled-components'

const RendedTask = styled.div`
width: 50%;
min-height: 3rem;
background-color: var(--orange);
border-radius: 1rem;

display: flex;
justify-content: center;
align-items: center;
` 


const Task = ({title}) => {
  return (
    <RendedTask>{title}</RendedTask>
  )
}

export default Task