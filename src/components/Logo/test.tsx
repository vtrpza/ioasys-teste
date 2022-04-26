import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Ioasys logo/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Ioasys logo/i).parentElement).toHaveStyle({
      color: '#333333'
    })
  })
  it('should render title and be white by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByText(/Book/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Ioasys logo/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })
  it('should render title Teste and be black', () => {
    renderWithTheme(<Logo color="black" title={'Teste'} />)
    expect(screen.getByText(/Teste/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Ioasys logo/i).parentElement).toHaveStyle({
      color: '#333333'
    })
  })
})
