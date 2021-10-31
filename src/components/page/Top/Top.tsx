import { chakra } from '@chakra-ui/react'
import React from 'react'

export type TopProps = {}

export const Top = ({}: TopProps) => {
  return (
    <>
      <chakra.h2 id="top" textStyle="h2WithTreat">
        Top
      </chakra.h2>
      <chakra.div>
        Top content
      </chakra.div>
    </>
  )
}
