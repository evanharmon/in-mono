import { ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StyledArrowIcon, StyledChevronIcon, StyledCogIcon } from '../Icons'
import primaryStyles from './DropdownMenuPrimary.module.css'

const StyledLogoutButton = styled.a``

interface DropdownItemProps {}

export function DropdownMenu() {
  return (
    <>
      <StyledLogoutButton href='/api/auth/logout'>Logout</StyledLogoutButton>
    </>
  )
}
