import DropdownMenu from '../components/DropdownMenu'
import { NavBar, NavItem, NavLink } from '../components/NavBar'
import { StyledUserIcon, StyledAdvancedOptionsIcon } from '../components/Icons'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect, useState } from 'react'

const Loading = () => (
  <>
    <h1>Loading...</h1>
  </>
)

export default function Index() {
  const { user, isLoading } = useUser()
  const [linkHref] = useState(user ? '#' : '/api/auth/login')

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavBar>
        <NavItem icon={<StyledAdvancedOptionsIcon />}></NavItem>
        <NavLink icon={<StyledUserIcon />} href={linkHref}></NavLink>
      </NavBar>
    </>
  )
}
