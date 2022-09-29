import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DataGrid from '.'

describe('<DataGrid />', () => {
  it('should render the heading', () => {
    //const { container } =
    renderWithTheme(<DataGrid label="DataGrid"/>)
    expect(screen.getByRole('heading', { name: /DataGrid/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
