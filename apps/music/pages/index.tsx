import DropdownMenu from '../components/DropdownMenu'
import { NavBar, NavItem } from '../components/NavBar'
import {
  StyledCaretIcon,
  StyledUserIcon,
  StyledAdvancedOptionsIcon,
} from '../components/Icons'

export default function Index() {
  return (
    <>
      <NavBar>
        <NavItem icon={<StyledAdvancedOptionsIcon />}></NavItem>
        <NavItem icon={<StyledUserIcon />}></NavItem>
      </NavBar>
    </>
  )
}
