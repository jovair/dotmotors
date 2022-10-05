import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    renderWithTheme(<Logo id="myId" />)
  })
})
