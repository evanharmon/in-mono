import { useUser } from '@auth0/nextjs-auth0'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StyledArrowIcon, StyledChevronIcon, StyledCogIcon } from '../Icons'
import primaryStyles from './DropdownMenuPrimary.module.css'

const StyledLogoutButton = styled.a``

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

interface DropdownItemProps {}

export function DropdownMenu() {
  const { user } = useUser()

  if (!user) return <></>

  return (
    <StyledDropdownContainer>
      <StyledLogoutButton href='/api/auth/logout'>Logout</StyledLogoutButton>
    </StyledDropdownContainer>
  )
}
