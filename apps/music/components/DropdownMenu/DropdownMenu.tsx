import { ReactNode, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { IconButtonStyles, StyledChevronIcon, StyledCogIcon } from '../styled'
import primaryStyles from './DropdownMenuPrimary.module.css'
import secondaryStyles from './DropdownMenuPrimary.module.css'

const StyledDropdownDiv = styled.div<{ height: string }>`
  height: $height;
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
`

const StyledMenuPrimaryDiv = styled.div`
  width: '100%';
`

const StyledDropdownItemButton = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;

  &:hover {
    background-color: hsl(228, 3%, 33%);
  }
`

const StyledLeftIconButton = styled.span`
  ${{ ...IconButtonStyles }};
  margin-right: 0.5rem;
  &:hover {
    filter: none;
  }
`

const StyledRightIconButton = styled.span`
  ${{ ...IconButtonStyles }};
  margin-left: auto;
  &:hover {
    filter: none;
  }
`

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
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames={{ ...primaryStyles }}
        >
          <>
            <StyledMenuPrimaryDiv>
              <DropdownItem>My Profile</DropdownItem>
            </StyledMenuPrimaryDiv>
            <StyledMenuPrimaryDiv>
              <DropdownItem
                leftIcon={<StyledCogIcon />}
                rightIcon={<StyledChevronIcon />}
                goToMenu='Settings'
              >
                Settings
              </DropdownItem>
            </StyledMenuPrimaryDiv>
            <StyledMenuPrimaryDiv>
              <DropdownItem
                leftIcon='🦧'
                rightIcon={<StyledChevronIcon />}
                goToMenu='animals'
              >
                Animals
              </DropdownItem>
            </StyledMenuPrimaryDiv>
          </>
        </CSSTransition>
      </StyledDropdownDiv>
    </>
  )
}
