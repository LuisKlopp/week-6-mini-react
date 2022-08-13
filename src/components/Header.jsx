import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
`

const LogoPosition = styled.div`
  align-items: left;
  padding: 2rem;
  font-size: 30px;
  border-bottom: 1px solid lightgray;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoPosition>
      LOGO
      </LogoPosition>
    </HeaderContainer>
  )
}

export default Header