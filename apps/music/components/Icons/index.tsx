import styled from 'styled-components'
import AdvancedOptionsIcon from '../../public/icons/icon-advanced-options.svg'
import ArrowIcon from '../../public/icons/arrow.svg'
import CaretIcon from '../../public/icons/caret.svg'
import ChevronIcon from '../../public/icons/chevron.svg'
import CogIcon from '../../public/icons/cog.svg'
import PlusIcon from '../../public/icons/plus.svg'
import SettingsIcon from '../../public/icons/icon-settings.svg'
import UserIcon from '../../public/icons/icon-user.svg'

const defaultStyle = {
  fill: 'var(--text-color)',
  width: '20px',
  height: '20px',
}

export const StyledAdvancedOptionsIcon = styled(AdvancedOptionsIcon)({
  ...defaultStyle,
})
export const StyledArrowIcon = styled(ArrowIcon)({ ...defaultStyle })
export const StyledChevronIcon = styled(ChevronIcon)({ ...defaultStyle })
export const StyledCogIcon = styled(CogIcon)({ ...defaultStyle })
export const StyledPlusIcon = styled(PlusIcon)({ ...defaultStyle })
export const StyledCaretIcon = styled(CaretIcon)({ ...defaultStyle })
export const StyledUserIcon = styled(UserIcon)({ ...defaultStyle })
export const StyledSettingsIcon = styled(SettingsIcon)({ ...defaultStyle })
