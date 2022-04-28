import { Story, Meta } from '@storybook/react/types-6-0'
import Background from '.'

export default {
  title: 'Background',
  component: Background
} as Meta

export const Basic: Story = (args) => <Background {...args} />
