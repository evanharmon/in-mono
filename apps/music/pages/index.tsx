import { NavBar, NavItem } from '../components/NavBar'
import {
  StyledBellIcon,
  StyledMessengerIcon,
  StyledPlusIcon,
  StyledCaretIcon,
} from '../components/styled'

export default function Index() {
  return (
    <>
      <NavBar>
        <NavItem icon={<StyledPlusIcon />} />
        <NavItem icon={<StyledBellIcon />} />
        <NavItem icon={<StyledMessengerIcon />} />
        <NavItem icon={<StyledCaretIcon />}></NavItem>
      </NavBar>
    </>
  )
}
