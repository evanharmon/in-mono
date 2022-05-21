import { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  IconButtonStyles,
  StyledDropdownDiv,
  StyledDropdownItemButton,
} from '../styled'

interface DropdownItemProps {
  leftIcon: ReactNode | string
  children: ReactNode
  rightIcon: ReactNode | string
  goToMenu?: string
  onClick: () => {}
}

const LeftIconButton = styled.span({
  ...IconButtonStyles,
  marginRight: '0.5rem',
  '&:hover': { filter: 'none' },
})
const RightIconButton = styled.span({
  ...IconButtonStyles,
  marginLeft: 'auto',
  '&:hover': { filter: 'none' },
})

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('0px')
  const [menuHeight, setMenuHeight] = useState('0px')

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  function DropdownItem({
    leftIcon,
    children,
    rightIcon,
    goToMenu,
  }: DropdownItemProps) {
    return (
      <>
        <StyledDropdownItemButton
          onClick={() => goToMenu && setActiveMenu(goToMenu)}
        >
          <LeftIconButton>{leftIcon}</LeftIconButton>
          {children}
          <RightIconButton>{rightIcon}</RightIconButton>
        </StyledDropdownItemButton>
      </>
    )
  }

  return (
    <>
      <StyledDropdownDiv
        ref={dropdownRef}
        height={menuHeight}
      ></StyledDropdownDiv>
    </>
  )
}
