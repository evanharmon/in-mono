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

interface ItemButtonAttrs {
  href: string
}

export const StyledNavIconButton = styled.a({
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
