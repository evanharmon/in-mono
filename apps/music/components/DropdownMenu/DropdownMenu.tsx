import { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconButtonStyles, StyledChevronIcon, StyledCogIcon } from '../styled'

interface StyledDropdownDiv {
  height: string
}

const StyledDropdownDiv = styled.div<StyledDropdownDiv>(({ height }) => ({
  // height: height,
  position: 'absolute',
  top: '58px',
  width: '300px',
  transform: 'translateX(-45%)',
  backgroundColor: 'var(--bg)',
  border: 'var(--border)',
  borderRadius: 'var(--border-radius)',
  padding: '1rem',
  overflow: 'hidden',
}))

const StyledDropdownItemDiv = styled.div({ width: '100%' })

const StyledDropdownItemButton = styled.a({
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

const StyledLeftIconButton = styled.span({
  ...IconButtonStyles,
  marginRight: '0.5rem',
  '&:hover': { filter: 'none' },
})

const StyledRightIconButton = styled.span({
  ...IconButtonStyles,
  marginLeft: 'auto',
  '&:hover': { filter: 'none' },
})

interface DropdownItemProps {
  leftIcon?: ReactNode | string
  children?: ReactNode | string
  rightIcon?: ReactNode | string
  goToMenu?: string
  onClick?: () => {}
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
          <StyledLeftIconButton>{leftIcon}</StyledLeftIconButton>
          {children}
          <StyledRightIconButton>{rightIcon}</StyledRightIconButton>
        </StyledDropdownItemButton>
      </>
    )
  }

  return (
    <>
      <StyledDropdownDiv ref={dropdownRef} height={menuHeight}>
        <StyledDropdownItemDiv>
          <DropdownItem>My Profile</DropdownItem>
        </StyledDropdownItemDiv>
        <StyledDropdownItemDiv>
          <DropdownItem
            leftIcon={<StyledCogIcon />}
            rightIcon={<StyledChevronIcon />}
            goToMenu='Settings'
          >
            Settings
          </DropdownItem>
        </StyledDropdownItemDiv>
      </StyledDropdownDiv>
    </>
  )
}
