import { Story, Meta } from '@storybook/react/types-6-0'
import BookCardDetail, { BookCardDetailProps } from '.'

export default {
  title: 'Book Card Detail',
  component: BookCardDetail,
  args: {
    title: 'Change by Design Second line example',
    author: 'Vitor Pouza',
    pages: '423',
    publisher: 'PZA inc',
    published: '21/04/2022',
    language: 'PT-BR',
    originalTitle: 'Teste livro',
    isbn10: '242',
    isbn13: '242',
    img: './img/Book-full.png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ante ut erat blandit, ut vulputate massa eleifend. In vulputate euismod nisl. Nam orci erat, luctus sed enim et, tristique malesuada urna. Nullam posuere suscipit felis, tincidunt viverra turpis pellentesque eu. Duis blandit sed sem eu commodo. Mauris fringilla id ipsum in condimentum. Curabitur non odio tristique, lobortis lectus at, vehicula massa. Integer odio ex, consequat non ipsum nec, tempus tempor metus. Cras facilisis ante et efficitur vehicula. Nunc finibus ornare facilisis. Maecenas turpis metus, blandit ac gravida eget, faucibus et elit. Cras est felis, commodo at gravida a, feugiat eget eros. Maecenas sollicitudin neque id arcu varius, nec sodales libero malesuada.'
  }
} as Meta

export const Default: Story<BookCardDetailProps> = (args) => (
  <BookCardDetail {...args} />
)
