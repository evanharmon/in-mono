import styled from 'styled-components'
import Auth0AdvancedOptionsIcon from '../../public/icons/icon-advanced-options.svg'
import ChevronsLeftIcon from '../../public/icons/chevrons-left.svg'
import Auth0SettingsIcon from '../../public/icons/icon-settings.svg'
import Auth0UserIcon from '../../public/icons/icon-user.svg'

const defaultStyle = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

// AUTH0 SVGs
export const StyledAdvancedOptionsIcon = styled(Auth0AdvancedOptionsIcon)({
  ...defaultStyle,
})
export const StyledUserIcon = styled(Auth0UserIcon)({ ...defaultStyle })
export const StyledSettingsIcon = styled(Auth0SettingsIcon)({ ...defaultStyle })

// TABLER SVGs
// Tabler svg's need fill: 'none'
export const StyledChevronsLeftIcon = styled(ChevronsLeftIcon)({
  ...defaultStyle,
  fill: 'none',
})
