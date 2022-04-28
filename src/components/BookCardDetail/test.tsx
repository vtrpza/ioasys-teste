import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BookCardDetail from '.'
const props = {
  id: 'asdad',
  title: 'Change by Design Second line example',
  authors: ['Vitor Pouza'],
  pageCount: '1123123',
  publisher: '123123123',
  published: '123123',
  category: '312312312',
  language: 'asdasdasdasd',
  imageUrl: 'asdasdasdasd',
  description: 'asdasdasdasd',
  isbn10: 'asdasdasdasd',
  isbn13: 'asdasdasdasd',
  show: true
}

describe('<BookCardDetail/>', () => {
  it('should render  the headings', () => {
    renderWithTheme(<BookCardDetail {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Change by Design Second line example/i
      })
    ).toBeInTheDocument()
  })
})
