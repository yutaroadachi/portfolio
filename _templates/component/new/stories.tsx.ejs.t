---
to: "<%= withStory ? `src/components/${path}/${name}.stories.tsx` : null %>"
---
import { Meta, Story } from "@storybook/react"
import React from "react"
import { <%= name %>, <%= name %>Props } from "./<%= name %>"

export default {
  title: '<%= h.changeCase.pascal(path) %>/<%= name %>',
  component: <%= name %>,
} as Meta<<%= name %>Props>

type Template = Story<<%= name %>Props>

const Template: Template = (args) => <<%= name %> {...args} />

export const Default: Template = Template.bind({})
