import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DataList from '.'

describe('<DataList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<DataList titleOne="Nome" items={[]} titleTwo={'CPF'} />)

    expect(screen.getByRole('heading', { name: /nome/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /CPF/i })).toBeInTheDocument
  })
})
