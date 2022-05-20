import { ReactNode, useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`

const StyledList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const StyledItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled.a.attrs({
  href: '#',
})`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: var(--light-gray);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }
`

type NavItemProps = {
  children?: ReactNode
  icon: ReactNode
}

export function NavItem({ children, icon }: NavItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledItem>
        <StyledButton onClick={() => setOpen(!open)}>{icon}</StyledButton>
        {open && children}
      </StyledItem>
    </>
  )
}

type NavBarProps = {
  children?: ReactNode
}

export function NavBar({ children }: NavBarProps) {
  return (
    <>
      <StyledNav>
        <StyledList>{children}</StyledList>
      </StyledNav>
    </>
  )
}
