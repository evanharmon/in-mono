import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { IconButtonStyles } from '../styled'

export const StyledNav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`

export const StyledList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const StyledItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledNavIconButton = styled.a({
  ...IconButtonStyles,
  '&:hover': {
    filter: 'brightness(2)',
  },
})

type NavItemProps = {
  children?: ReactNode
  icon: ReactNode
}

export function NavItem({ children, icon }: NavItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledItem>
        <StyledNavIconButton href='#' onClick={() => setOpen(!open)}>
          {icon}
        </StyledNavIconButton>
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
