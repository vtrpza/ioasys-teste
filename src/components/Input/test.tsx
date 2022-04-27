import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

const props = {
  inputType: 'email',
  value: 'vitor@email.com',
  button: false
}

describe('<Input/>', () => {
  it('should render  the heading', () => {
    renderWithTheme(<Input {...props} />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })
})
