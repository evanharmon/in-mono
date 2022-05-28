import { ReactNode, useState } from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledNavIconButton = styled.button`
  --nav-button-size: 'calc(var(--nav-size)*0.5)';
  width: var(--nav-button-size);
  height: var(--nav-button-size);
`

type NavItemProps = {
  children?: ReactNode
  icon: ReactNode
}

export function NavItem({ children, icon }: NavItemProps) {
  return (
    <StyledListItem>
      <StyledNavIconButton>{icon}</StyledNavIconButton>
      {children}
    </StyledListItem>
  )
}
