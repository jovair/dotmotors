import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Basic = Template.bind({})
