import { ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import {
  IconButtonStyles,
  StyledArrowIcon,
  StyledBoltIcon,
  StyledChevronIcon,
  StyledCogIcon,
} from '../styled'
import primaryStyles from './DropdownMenuPrimary.module.css'
import secondaryStyles from './DropdownMenuPrimary.module.css'

const StyledDropdownDiv = styled.div<{ height: string }>`
  height: ${props => props.height};
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
  width: 100%;
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
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState('0px')
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const mainMenuRef = useRef(null)
  const settingsMenuRef = useRef(null)
  const animalsMenuRef = useRef(null)

  useEffect(() => console.log(`activeMenu`, activeMenu), [activeMenu])
  useEffect(() => console.log(`menuHeight`, menuHeight), [menuHeight])
  useEffect(() => {
    if (dropdownRef.current !== null) {
      const el = dropdownRef.current?.firstChild as HTMLElement
      const height = el.offsetHeight || 0
      setMenuHeight(`${height}px`)
    }
  }, [])

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight || 0
    setMenuHeight(`${height}px`)
  }

  function DropdownItem({
    leftIcon,
    children,
    rightIcon,
    goToMenu,
  }: DropdownItemProps) {
    return (
      <StyledDropdownItemButton
        href='#'
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <StyledLeftIconButton>{leftIcon}</StyledLeftIconButton>
        {children}
        <StyledRightIconButton>{rightIcon}</StyledRightIconButton>
      </StyledDropdownItemButton>
    )
  }

  return (
    <StyledDropdownDiv ref={dropdownRef} height={menuHeight}>
      <CSSTransition
        nodeRef={mainMenuRef}
        in={activeMenu === 'main'}
        timeout={500}
        classNames={{ ...primaryStyles }}
        onEnter={calcHeight}
      >
        <StyledMenuPrimaryDiv>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<StyledCogIcon />}
            rightIcon={<StyledChevronIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon='🦧'
            rightIcon={<StyledChevronIcon />}
            goToMenu='animals'
          >
            Animals
          </DropdownItem>
        </StyledMenuPrimaryDiv>
      </CSSTransition>

      {/* <CSSTransition
        nodeRef={settingsMenuRef}
        in={activeMenu === 'settings'}
        timeout={500}
        classNames={{ ...secondaryStyles }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <StyledMenuPrimaryDiv>
          <DropdownItem goToMenu='main' leftIcon={<StyledArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<StyledBoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<StyledBoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<StyledBoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<StyledBoltIcon />}>Awesome!</DropdownItem>
        </StyledMenuPrimaryDiv>
      </CSSTransition> */}

      {/* <CSSTransition
        nodeRef={animalsMenuRef}
        in={activeMenu === 'animals'}
        timeout={500}
        classNames={{ ...secondaryStyles }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <StyledMenuPrimaryDiv>
          <DropdownItem goToMenu='main' leftIcon={<StyledArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </StyledMenuPrimaryDiv>
      </CSSTransition> */}
    </StyledDropdownDiv>
  )
}
