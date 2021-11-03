import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Works, WorksProps } from './Works'

export default {
  title: 'page/Works',
  component: Works,
} as Meta<WorksProps>

type Template = Story<WorksProps>

const Template: Template = (args) => <Works {...args} />

export const Default: Template = Template.bind({})
