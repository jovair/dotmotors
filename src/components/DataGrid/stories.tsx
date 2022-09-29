import { ComponentStory, ComponentMeta } from '@storybook/react'

import item from './mock'

import DataGrid from '.'

export default {
  title: 'DataGrid',
  component: DataGrid,
  args: { ...item }
} as ComponentMeta<typeof DataGrid>

const Template: ComponentStory<typeof DataGrid> = (args) => (
  <DataGrid {...args} />
)

export const Basic = Template.bind({})
