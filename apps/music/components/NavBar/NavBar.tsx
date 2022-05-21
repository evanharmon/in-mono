import { ReactNode, useState } from 'react'
import {
  StyledNav,
  StyledList,
  StyledItem,
  StyledNavIconButton,
} from '../styled'

type NavItemProps = {
  children?: ReactNode
  icon: ReactNode
}

export function NavItem({ children, icon }: NavItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledItem>
        <StyledNavIconButton onClick={() => setOpen(!open)}>
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
