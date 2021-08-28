import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Achievements, AchievementsProps } from './Achievements'

export default {
  title: 'HomePage/Achievements',
  component: Achievements,
} as Meta<AchievementsProps>

type Template = Story<AchievementsProps>

const Template: Template = (args) => <Achievements {...args} />

export const Default: Template = Template.bind({})
