import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

describe('<Main/>', () => {
  it('should render the welcome message`s username from the menu', () => {
    renderWithTheme(<Main />)

    expect(screen.getByText(/vitor henrique/i)).toBeInTheDocument
  })
})
