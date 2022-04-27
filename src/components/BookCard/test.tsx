import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BookCard from '.'

const props = {
  title: 'Livro 1',
  author: 'Vitor Pouza',
  pages: '49',
  publisher: 'PZA Inc',
  published: '21 abril 2022',
  img: './img/Book 1.png'
}

describe('<BookCard/>', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<BookCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Livro 1/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
