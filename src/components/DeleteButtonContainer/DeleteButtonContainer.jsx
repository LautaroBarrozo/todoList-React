import React from 'react'
import styled from 'styled-components'

const DeleteContainer = styled.div`
height: 5rem;
display: flex;
justify-content: center;
align-items: center;

`


const DeleteButtonContainer = ({children}) => {
  return (
    <DeleteContainer>{children}</DeleteContainer>
  )
}

export default DeleteButtonContainer