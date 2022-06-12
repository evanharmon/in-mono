import DropdownMenu from '../components/DropdownMenu'
import { NavBar, NavLink } from '../components/NavBar'
import { StyledAdvancedOptionsIcon, StyledLoginIcon } from '../components/Icons'
import { useUser } from '@auth0/nextjs-auth0'

const LOGIN_URL = '/api/auth/login'

const Loading = () => (
  <>
    <h1>Loading...</h1>
  </>
)

export default function Index() {
  const { user, isLoading } = useUser()

  if (isLoading) <Loading />

  return (
    <>
      <NavBar>
        <NavLink
          icon={user ? <StyledAdvancedOptionsIcon /> : <StyledLoginIcon />}
          href={user ? '#' : LOGIN_URL}
        >
          <DropdownMenu />
        </NavLink>
      </NavBar>
    </>
  )
}
