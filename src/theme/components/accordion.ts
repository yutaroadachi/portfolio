const baseStyleButton = {
  fontWeight: 'bold',
}

const baseStylePanel = {
  fontSize: 'xs',
  pb: 4,
}

const baseStyle = {
  button: baseStyleButton,
  panel: baseStylePanel,
}

const variants = {
  card: {
    container: {
      borderWidth: '1px',
      borderRadius: 'lg',
      borderColor: 'whiteAlpha.300',
    },
    button: {
      borderRadius: 'lg',
    },
  },
}

const defaultProps = {
  variant: 'card',
}

export default {
  baseStyle,
  variants,
  defaultProps,
}
