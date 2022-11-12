import React from 'react'
import styled from 'styled-components'

const ContainerMain = styled.div`
height: 30rem;
width: 70rem;
background-color: var(--black);

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`


const MainContainer = ({children}) => {
  return (
    <ContainerMain>{children}</ContainerMain>
  )
}

export default MainContainer
