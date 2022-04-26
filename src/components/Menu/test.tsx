import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu/>', () => {
  it('should render the menu logo and the logo should be black', () => {
    renderWithTheme(<Menu userName="Teste" />)

    expect(
      screen.getByLabelText(/ioasys logo/i).parentElement
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/ioasys logo/i).parentElement).toHaveStyle({
      color: '#333333'
    })
  })
  it('should render an anchor with the correct link', () => {
    renderWithTheme(<Menu userName="Teste" />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
