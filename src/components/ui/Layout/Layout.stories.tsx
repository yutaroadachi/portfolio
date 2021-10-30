import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Layout, LayoutProps } from './Layout'

export default {
  title: 'ui/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<LayoutProps>

type Template = Story<LayoutProps>

const Template: Template = (args) => <Layout {...args}>コンテンツエリア</Layout>

export const Default: Template = Template.bind({})
