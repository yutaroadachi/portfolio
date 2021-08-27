import { Center } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Navigation, NavigationProps } from './Navigation'

export default {
  title: 'Common/Navigation',
  component: Navigation,
} as Meta<NavigationProps>

type Template = Story<NavigationProps>

const Template: Template = (args) => (
  <Center>
    <Navigation {...args} />
  </Center>
)

export const ResumeActive: Template = Template.bind({})
ResumeActive.args = {
  active: 'resume',
}

export const WorksActive: Template = Template.bind({})
WorksActive.args = {
  active: 'works',
}
