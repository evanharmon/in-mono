import styled from 'styled-components'
import ArrowIcon from '../public/icons/arrow.svg'
import BellIcon from '../public/icons/bell.svg'
import BoltIcon from '../public/icons/bolt.svg'
import CaretIcon from '../public/icons/caret.svg'
import ChevronIcon from '../public/icons/chevron.svg'
import CogIcon from '../public/icons/cog.svg'
import MessengerIcon from '../public/icons/messenger.svg'
import PlusIcon from '../public/icons/plus.svg'

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

const iconStyles = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

export const StyledArrowIcon = styled(ArrowIcon)({ ...iconStyles })
export const StyledBoltIcon = styled(BoltIcon)({ ...iconStyles })
export const StyledBellIcon = styled(BellIcon)({ ...iconStyles })
export const StyledChevronIcon = styled(ChevronIcon)({ ...iconStyles })
export const StyledCogIcon = styled(CogIcon)({ ...iconStyles })
export const StyledPlusIcon = styled(PlusIcon)({ ...iconStyles })
export const StyledCaretIcon = styled(CaretIcon)({ ...iconStyles })
export const StyledMessengerIcon = styled(MessengerIcon)({ ...iconStyles })
