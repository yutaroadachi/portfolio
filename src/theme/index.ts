import { extendTheme } from '@chakra-ui/react'
import foundations from './foundations'
import layerStyles from './layerStyles'
import styles from './styles'

const overrides = {
  styles,
  ...foundations,
  layerStyles,
}

export default extendTheme(overrides)
