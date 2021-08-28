import { Box, BoxProps, Stack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import layerStyles from 'src/theme/layerStyles'

export default {
  title: 'Theme/LayerStyle',
  component: Box,
  args: {
    w: 'full',
    p: 4,
  },
} as Meta<BoxProps>

type Template = Story<BoxProps>

const Template: Template = (args) => (
  <Stack spacing={4}>
    {Object.keys(layerStyles).map((layerStyleName) => (
      <Box layerStyle={layerStyleName} key={layerStyleName} {...args}>
        {layerStyleName}
      </Box>
    ))}
  </Stack>
)

export const Default: Template = Template.bind({})
