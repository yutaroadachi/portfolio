import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Histories, HistoriesProps } from './Histories'

export default {
  title: 'HomePage/Histories',
  component: Histories,
} as Meta<HistoriesProps>

type Template = Story<HistoriesProps>

const Template: Template = (args) => <Histories {...args} />

export const Default: Template = Template.bind({})
