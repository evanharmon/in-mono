import DropdownMenu from '../components/DropdownMenu'
import { NavBar, NavItem, NavLink } from '../components/NavBar'
import { StyledUserIcon, StyledAdvancedOptionsIcon } from '../components/Icons'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const loginUrl = '/api/auth/login'

const Loading = () => (
  <>
    <h1>Loading...</h1>
  </>
)

const UserIconLink = styled(NavLink)``
UserIconLink.displayName = 'UserIconLink'

export default function Index() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavBar>
        {/* TODO move advanced options inside main dropdown */}
        {/* <NavItem icon={<StyledAdvancedOptionsIcon />}></NavItem> */}
        <UserIconLink icon={<StyledUserIcon />} href={user ? '#' : loginUrl}>
          <DropdownMenu />
        </UserIconLink>
      </NavBar>
    </>
  )
}
