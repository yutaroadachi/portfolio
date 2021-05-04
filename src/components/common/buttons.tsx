import { EmailIcon } from '@chakra-ui/icons'
import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export const ContactButton = (props: ButtonProps) => (
  <Button
    as="a"
    href="https://docs.google.com/forms/d/e/1FAIpQLSdSMQFzMIm2oWZ9fk_r1RGIUl_gaf3r6ouHVK_Ysn2FERGxVA/viewform?usp=sf_link"
    target="_blank"
    rel="noopener noreferrer"
    rightIcon={<EmailIcon />}
    {...props}
  >
    Contact
  </Button>
)
