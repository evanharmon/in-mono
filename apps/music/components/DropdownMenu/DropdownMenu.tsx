import { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconButtonStyles } from '../styled'

export const StyledDropdownItemButton = styled.a({
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 'var(--border-radius)',
  transition: 'background var(--speed)',
  padding: '0.5rem',
  '&:hover': {
    backgroundColor: 'hsl(228, 3%, 33%)',
  },
})

interface StyledDropdownDiv {
  height: string
}

export const StyledDropdownDiv = styled.div<StyledDropdownDiv>(
  {},
  ({ height }) => ({
    height: height,
  }),
)

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

interface DropdownItemProps {
  leftIcon: ReactNode | string
  children: ReactNode
  rightIcon: ReactNode | string
  goToMenu?: string
  onClick: () => {}
}

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
          href='#'
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
