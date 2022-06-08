import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { StyledIconLink } from '../Icons'

const StyledListItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
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
      <StyledIconLink href={href} onClick={() => setOpen(open => !open)}>
        {icon}
      </StyledIconLink>
      {open && children}
    </StyledListItem>
  )
}
