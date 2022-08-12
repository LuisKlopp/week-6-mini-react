import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightblue; 
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderContainer>Header</HeaderContainer>
  )
}

export default Header