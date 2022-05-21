import styled from 'styled-components'

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

export const StyledNav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`

export const StyledList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const StyledItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ItemButtonAttrs {
  href: string
}

export const StyledNavIconButton = styled.a.attrs<ItemButtonAttrs>({
  href: '#',
})({
  ...IconButtonStyles,
  '&:hover': {
    filter: 'brightness(2)',
  },
})

export const StyledDropdownItemButton = styled.a.attrs<ItemButtonAttrs>({
  href: '#',
})({
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
