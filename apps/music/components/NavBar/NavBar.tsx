import { ReactNode, useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  --nav-size: 60px;
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`

const StyledList = styled.ul`
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
`

type NavBarProps = {
  children?: ReactNode
}

export function NavBar({ children }: NavBarProps) {
  return (
    <StyledNav>
      <StyledList>{children}</StyledList>
    </StyledNav>
  )
}
