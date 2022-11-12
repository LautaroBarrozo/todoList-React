import React from 'react'
import styled from 'styled-components'

const ContainerButtonInput = styled.form`
display: flex;
justify-content: center;
align-items: center;
height: 5rem;
gap: 1rem;
`


const InputButtonContainer = ({getInput ,children}) => {
  return (
    <ContainerButtonInput onSubmit={getInput}>{children}</ContainerButtonInput>
  )
}

export default InputButtonContainer