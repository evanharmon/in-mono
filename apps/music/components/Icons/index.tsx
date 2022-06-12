import styled from 'styled-components'
import Auth0AdvancedOptionsIcon from '../../public/icons/icon-advanced-options.svg'
import ChevronsLeftIcon from '../../public/icons/chevrons-left.svg'
import Auth0LoginIcon from '../../public/icons/icon-login.svg'
import Auth0SettingsIcon from '../../public/icons/icon-settings.svg'
import Auth0UserIcon from '../../public/icons/icon-user.svg'

const defaultIconStyle = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

// AUTH0 SVGs
export const StyledAdvancedOptionsIcon = styled(Auth0AdvancedOptionsIcon)({
  ...defaultIconStyle,
})
export const StyledLoginIcon = styled(Auth0LoginIcon)({ ...defaultIconStyle })
export const StyledUserIcon = styled(Auth0UserIcon)({ ...defaultIconStyle })
export const StyledSettingsIcon = styled(Auth0SettingsIcon)({
  ...defaultIconStyle,
})

// TABLER SVGs
// Tabler svg's need fill: 'none'
export const StyledChevronsLeftIcon = styled(ChevronsLeftIcon)({
  ...defaultIconStyle,
  fill: 'none',
})

const defaultButtonStyle = {
  '--button-size': 'calc(var(--nav-size) * 0.5)',
  alignItems: 'center',
  backgroundColor: 'var(--light-gray)',
  borderRadius: '50%',
  display: 'flex',
  height: 'var(--nav-button-size)',
  justifyContent: 'center',
  margin: '2px',
  padding: '10px',
  transition: 'filter 300ms',
  '&:hover': {
    filter: 'brightness(2)',
  },
  width: 'var(--nav-button-size)',
}

export const StyledIconButton = styled.button`
  ${{ ...defaultButtonStyle }};
`

export const StyledIconLink = styled.a`
  ${{ ...defaultButtonStyle }};
`
