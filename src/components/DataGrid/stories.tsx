import { ComponentStory, ComponentMeta } from '@storybook/react'

import DataGrid from '.'

export default {
  title: 'DataGrid',
  component: DataGrid
} as ComponentMeta<typeof DataGrid>

const Template: ComponentStory<typeof DataGrid> = (args) => <DataGrid {...args} />

export const Basic = Template.bind({})

Basic.args = {
   label: 'DataGrid'
}
