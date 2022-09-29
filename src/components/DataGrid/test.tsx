import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DataGrid from '.'

describe('<DataGrid />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <DataGrid firstColumn="José Maria Rodrigues" secondColumn={'123'} />
    )
    expect(screen.getByRole('heading', { name: /José Maria/i }))
      .toBeInTheDocument

    expect(screen.getByRole('heading', { name: /123/i })).toBeInTheDocument
  })
})
