import styled from 'styled-components'
import { NavBar, NavItem } from '../components/NavBar'
import ArrowIcon from '../public/icons/arrow.svg'
import BellIcon from '../public/icons/bell.svg'
import BoltIcon from '../public/icons/bolt.svg'
import CaretIcon from '../public/icons/caret.svg'
import ChevronIcon from '../public/icons/chevron.svg'
import CogIcon from '../public/icons/cog.svg'
import MessengerIcon from '../public/icons/messenger.svg'
import PlusIcon from '../public/icons/plus.svg'

const iconStyles = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

const StyledPlusIcon = styled(PlusIcon)({ ...iconStyles })
const StyledBellIcon = styled(BellIcon)({ ...iconStyles })
const StyledMessengerIcon = styled(MessengerIcon)({ ...iconStyles })

export const IconButtonStyles = {
  '--button-size': 'calc(var(--nav-size) * 0.5)',
  width: 'var(--button-size)',
  height: 'var(--button-size)',
  backgroundColor: 'var(--light-gray)',
  borderRadius: '50%',
  padding: '5px',
  margin: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'filter 300ms',
}
export const StyledNavIconButton = styled.a({
  ...IconButtonStyles,
  '&:hover': {
    filter: 'brightness(2)',
  },
})

export default function Index() {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='#' className='icon-button'>
              <StyledPlusIcon />
            </a>
          </li>
          <li className='nav-item'>
            <StyledNavIconButton href='#'>
              <StyledBellIcon />
            </StyledNavIconButton>
          </li>
        </ul>
      </nav>
      {/* <NavBar>
        <NavItem icon={<StyledBellIcon />} />
      </NavBar> */}
    </>
  )
  // return (
  //   <>
  //     <NavBar>
  //       <NavItem icon={<StyledPlusIcon />} />
  //       <NavItem icon={<StyledBellIcon />} />
  //       <NavItem icon={<StyledMessengerIcon />} />

  //       <NavItem icon={<CaretIcon />}></NavItem>
  //     </NavBar>
  //   </>
  // )
}
