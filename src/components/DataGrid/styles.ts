import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main``

export const Content = styled.div``

export const GridLine = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4fr 1.6fr;
    padding: ${theme.spacings.xxsmall};
    padding-right: 0;
    border-bottom: ${theme.colors.lightGray} solid 0.1rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
  `}

  :hover {
    background-color: ${theme.colors.lightGray};
  }
`

export const ColumnOne = styled.h2`
  font: inherit;
`

export const ColumnTwo = styled.h2`
  font: inherit;
  justify-self: right;
`
