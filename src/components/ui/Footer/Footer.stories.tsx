import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'ui/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FooterProps>

type Template = Story<FooterProps>

const Template: Template = (args) => <Footer {...args} />

export const Default: Template = Template.bind({})
