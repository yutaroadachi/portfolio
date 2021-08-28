import { Tag, TagProps } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Theme/Components/Tag',
  component: Tag,
  args: {
    size: 'md',
  },
} as Meta<TagProps>

type Template = Story<TagProps>

const Template: Template = (args) => <Tag {...args} />

export const Primary: Template = Template.bind({})
Primary.args = {
  children: 'Primary',
  variant: 'primary',
}

export const Outlined: Template = Template.bind({})
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
}
