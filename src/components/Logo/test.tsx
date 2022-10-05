import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)
  })
})
