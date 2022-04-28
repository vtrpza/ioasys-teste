import { Story, Meta } from '@storybook/react/types-6-0'
import BookCardDetail, { BookCardDetailProps } from '.'

export default {
  title: 'Book Card Detail',
  component: BookCardDetail,
  args: {
    id: '2342342342',
    title: '2342342342',
    authors: ['2342342342', '23434'],
    pageCount: '2342342342',
    publisher: '2342342342',
    published: '2342342342',
    category: '2342342342',
    language: '2342342342',
    imageUrl: './img/Book-full.png',
    description: '2342342342',
    isbn10: '2342342342',
    isbn13: '2342342342',
    show: '2342342342'
  }
} as Meta

export const Default: Story<BookCardDetailProps> = (args) => (
  <BookCardDetail {...args} />
)
