import { extendTheme } from '@chakra-ui/react'
import foundations from './foundations'
import layerStyles from './layerStyles'
import styles from './styles'
import textStyles from './textStyles'

const overrides = {
  styles,
  ...foundations,
  textStyles,
  layerStyles,
}

export default extendTheme(overrides)
