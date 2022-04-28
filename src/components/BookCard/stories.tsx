import { Story, Meta } from '@storybook/react/types-6-0'
import BookCard from '.'

const props = {
  id: '2',
  title: '23423',
  authors: ['te', 'te'],
  pageCount: '12312',
  publisher: '12312',
  published: '12312',
  category: '12312',
  language: '12312',
  imageUrl: './img/Book 1.png'
}

export default {
  title: 'BookCard',
  component: BookCard
} as Meta

export const Default: Story = (args) => <BookCard {...props} {...args} />
