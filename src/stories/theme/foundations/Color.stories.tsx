import { Box, BoxProps, chakra, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import colors from 'src/theme/foundations/colors'

export default {
  title: 'Theme/Foundations/Color',
  component: Box,
  args: {
    boxSize: '64px',
    borderWidth: '1px',
    borderColor: '#000',
  },
} as Meta<BoxProps>

type Template = Story<BoxProps>

const Template: Template = (args) => (
  <Wrap spacing={4}>
    {Object.entries(colors).map(([colorName, colorHex]) => (
      <WrapItem key={colorName}>
        <VStack spacing={1}>
          <Box bgColor={colorHex} {...args} />
          <chakra.p>{colorName}</chakra.p>
        </VStack>
      </WrapItem>
    ))}
  </Wrap>
)

export const Default: Template = Template.bind({})
