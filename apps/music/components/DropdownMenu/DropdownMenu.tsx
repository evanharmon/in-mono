import { useUser } from '@auth0/nextjs-auth0'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { StyledArrowIcon, StyledChevronIcon, StyledCogIcon } from '../Icons'
import primaryStyles from './DropdownMenuPrimary.module.css'

const StyledLogoutButton = styled.a``

interface DropdownItemProps {}

export function DropdownMenu() {
  const { user } = useUser()

  if (!user) return <></>

  return (
    <>
      <StyledLogoutButton href='/api/auth/logout'>Logout</StyledLogoutButton>
    </>
  )
}
