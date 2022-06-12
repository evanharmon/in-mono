import { ReactNode, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import styled from 'styled-components'
import {
  DefaultButtonStyle,
  StyledChevronsLeftIcon,
  StyledLoginIcon,
  StyledUserIcon,
} from '../Icons'

const LOGOUT_URL = '/api/auth/logout'

const StyledDropdownItemButton = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  /* border-radius: var(
    --border-radius
  ); // this is doing nothing... take out from tutorial? */
  /* transition: background var(--speed); // is this doing anything? */
`

const StyledDropdownItemIconButton = styled.span<{
  marginLeft?: string
  marginRight?: string
}>`
  ${{ ...DefaultButtonStyle }};
  ${props => props.marginRight && `margin-right: ${props.marginRight}`};
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}`};
  &:hover {
    filter: none;
  }
`

type Menus = 'Main' | 'Profile' | 'Settings'

interface DropdownItemProps {
  leftIcon: ReactNode | 'string'
  children?: ReactNode
  goToMenu?: Menus
  href?: string
  setActiveMenu?(Menu: Menus): void
}

function DropdownItem({
  leftIcon,
  children,
  goToMenu,
  href = '#',
  setActiveMenu,
}: DropdownItemProps) {
  return (
    <StyledDropdownItemButton
      href={href}
      onClick={() => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}
    >
      <StyledDropdownItemIconButton marginRight='0.5rem'>
        {leftIcon}
      </StyledDropdownItemIconButton>
      {children}
    </StyledDropdownItemButton>
  )
}

// TODO use relative values instead of hard-coded pixels
// TODO later - dynamic height per dropdown items
const StyledDropdownContainer = styled.div`
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  height: 150px; // TODO make dynamic
  overflow: hidden;
  padding: 1rem;
  position: absolute;
  top: 60px;
  transform: translateX(-45%);
  transition: height var(--speed) ease;
  width: 325px;
`

const StyledMenuContainer = styled.div`
  width: 100%;
`

export function DropdownMenu() {
  const { user } = useUser()
  const [activeMenu, setActiveMenu] = useState<Menus>('Main')

  if (!user) return <></>

  return (
    <StyledDropdownContainer>
      {/* Main Dropdown Menu Item List */}
      {activeMenu === 'Main' && (
        <StyledMenuContainer>
          <DropdownItem
            leftIcon={<StyledUserIcon />}
            goToMenu='Profile'
            setActiveMenu={setActiveMenu}
          >
            My Profile
          </DropdownItem>
        </StyledMenuContainer>
      )}

      {/* My Profile Dropdown Menu */}
      {activeMenu === 'Profile' ? (
        <StyledMenuContainer>
          <DropdownItem
            leftIcon={<StyledChevronsLeftIcon />}
            goToMenu='Main'
            setActiveMenu={setActiveMenu}
          >
            Main
          </DropdownItem>
          <DropdownItem href={LOGOUT_URL} leftIcon={<StyledLoginIcon />}>
            Logout
          </DropdownItem>
        </StyledMenuContainer>
      ) : null}
    </StyledDropdownContainer>
  )
}
