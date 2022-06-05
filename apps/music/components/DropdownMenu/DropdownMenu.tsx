import { ReactNode, useEffect, useRef, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StyledChevronsLeftIcon } from '../Icons'
import primaryStyles from './DropdownMenuPrimary.module.css'

const StyledLogoutButton = styled.a``

const StyledDropdownItemButton = styled.a`
  display: flex;
`
type Menus = 'Main' | 'Profile' | 'Settings'

interface DropdownItemProps {
  leftIcon?: ReactNode | 'string'
  children?: ReactNode
  goToMenu?: Menus
  setActiveMenu?(Menu: Menus): void
}

function DropdownItem({
  leftIcon,
  children,
  goToMenu,
  setActiveMenu,
}: DropdownItemProps) {
  return (
    <>
      <StyledDropdownItemButton
        href='#'
        onClick={() => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}
      >
        {leftIcon}
        {children}
      </StyledDropdownItemButton>
    </>
  )
}

// TODO use relative values instead of hard-coded pixels
const StyledDropdownContainer = styled.div`
  position: absolute;
  height: 150px; // TODO make dynamic
  top: 60px;
  width: 125px;
  right: 0px; // avoids negative values which push nav out of place on mobile
  background-color: lightslategrey;
  overflow: hidden;
`

const StyledMenuContainer = styled.div`
  /* width: 100%; */
`

export function DropdownMenu() {
  const { user } = useUser()
  const [activeMenu, setActiveMenu] = useState<Menus>('Main')

  if (!user) return <></>

  return (
    <StyledDropdownContainer>
      {/* Main Dropdown Menu Item List */}
      <StyledMenuContainer>
        <DropdownItem goToMenu='Profile' setActiveMenu={setActiveMenu}>
          My Profile
        </DropdownItem>
      </StyledMenuContainer>

      {/* My Profile Dropdown Menu */}
      {activeMenu === 'Profile' ? (
        <>
          <DropdownItem
            leftIcon={<StyledChevronsLeftIcon />}
            goToMenu='Main'
            setActiveMenu={setActiveMenu}
          ></DropdownItem>
          <DropdownItem>
            <StyledLogoutButton href='/api/auth/logout'>
              Logout
            </StyledLogoutButton>
          </DropdownItem>
        </>
      ) : null}
    </StyledDropdownContainer>
  )
}
