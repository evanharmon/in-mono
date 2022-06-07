import DropdownMenu from '../components/DropdownMenu'
import { NavBar, NavLink } from '../components/NavBar'
import { StyledUserIcon } from '../components/Icons'
import { useUser } from '@auth0/nextjs-auth0'

const loginUrl = '/api/auth/login'

const Loading = () => (
  <>
    <h1>Loading...</h1>
  </>
)

export default function Index() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavBar>
        <NavLink icon={<StyledUserIcon />} href={user ? '#' : loginUrl}>
          <DropdownMenu />
        </NavLink>
      </NavBar>
    </>
  )
}
