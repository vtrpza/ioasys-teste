import { Story, Meta } from '@storybook/react/types-6-0'
import BookCard from '.'

const props = {
  title: 'Livro 1',
  author: 'Vitor Pouza',
  pages: '49',
  publisher: 'PZA Inc',
  published: '21 abril 2022',
  img: './img/Book 1.png'
}

export default {
  title: 'BookCard',
  component: BookCard
} as Meta

export const Default: Story = (args) => <BookCard {...props} {...args} />
