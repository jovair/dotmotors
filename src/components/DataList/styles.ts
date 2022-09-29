import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const TableTitle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4fr 1.6fr;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    border-top-left-radius ${theme.border.radius};
    border-top-right-radius ${theme.border.radius};
  `}
`

export const ColumnOne = styled.h2`
  ${({ theme }) => css`
    font-size: inherit;
    text-align: left;
    padding: ${theme.spacings.xxsmall};
  `}
`

export const ColumnTwo = styled.h2`
  ${({ theme }) => css`
    font-size: inherit;
    padding-top: ${theme.spacings.xxsmall};
    justify-self: left;
    padding-left: ${theme.spacings.xxsmall};
  `}
`

export const DataGridLine = styled.div``
