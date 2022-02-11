---
to: src/components/page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page.stories.tsx
---
<%_ componentName = `${h.changeCase.pascalCase(path.split("/").join("."))}Page` _%>
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { <%= componentName %>, <%= componentName %>Props } from './<%= componentName %>'

export default {
  title: 'page/<%= componentName %>',
  component: <%= componentName %>,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<<%= componentName %>Props>

type Template = Story<<%= componentName %>Props>

const Template: Template = (args) => <<%= componentName %> {...args} />

export const Default: Template = Template.bind({})
