import { ReactNode, useState } from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledNavIconLink = styled.a`
  --nav-button-size: 'calc(var(--nav-size)*0.5)';
  width: var(--nav-button-size);
  height: var(--nav-button-size);
`

type NavLinkProps = {
  children?: ReactNode
  icon: ReactNode
  href: string
}

export function NavLink({ children, icon, href }: NavLinkProps) {
  const [open, setOpen] = useState(false)

  return (
    <StyledListItem>
      <StyledNavIconLink href={href} onClick={() => setOpen(open => !open)}>
        {icon}
      </StyledNavIconLink>
      {open && children}
    </StyledListItem>
  )
}
