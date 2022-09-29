import { ComponentStory, ComponentMeta } from '@storybook/react'

import items from './mock'

import DataList from '.'

export default {
  title: 'DataList',
  component: DataList,
  args: { items }
} as ComponentMeta<typeof DataList>

const Template: ComponentStory<typeof DataList> = (args) => (
  <DataList {...args} />
)

export const Basic = Template.bind({})
