import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  chakra,
  Stack,
} from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Theme/Components/Accordion',
  component: Accordion,
  args: {
    defaultIndex: [0],
    allowMultiple: true,
  },
} as Meta<AccordionProps>

type Template = Story<AccordionProps>

const Template: Template = (args) => (
  <Accordion {...args}>
    <Stack spacing={4}>
      <AccordionItem>
        <AccordionButton>
          <chakra.p flex="1" textAlign="left">
            Example 1 Button
          </chakra.p>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <chakra.p>Example 1 Panel</chakra.p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <chakra.p flex="1" textAlign="left">
            Example 2 Button
          </chakra.p>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <chakra.p>Example 2 Panel</chakra.p>
        </AccordionPanel>
      </AccordionItem>
    </Stack>
  </Accordion>
)

export const Card: Template = Template.bind({})
Card.args = {
  variant: 'card',
}
