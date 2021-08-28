import { BoxProps, chakra, Stack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import textStyles from 'src/theme/textStyles'

export default {
  title: 'Theme/TextStyle',
  component: chakra.p,
} as Meta<BoxProps>

type Template = Story<BoxProps>

const Template: Template = (args) => (
  <Stack spacing={4}>
    {Object.keys(textStyles).map((textStyleName) => (
      <chakra.p textStyle={textStyleName} key={textStyleName} {...args}>
        {textStyleName}
      </chakra.p>
    ))}
  </Stack>
)

export const Default: Template = Template.bind({})
