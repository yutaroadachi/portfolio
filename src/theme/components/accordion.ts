const baseStyleButton = {
  fontWeight: 'bold',
}

const baseStylePanel = {
  fontSize: '12px',
  pb: 4,
}

const baseStyle = {
  button: baseStyleButton,
  panel: baseStylePanel,
}

const variants = {
  card: {
    container: {
      borderTopWidth: 'none',
      layerStyle: 'card',
    },
    button: {
      borderRadius: '10px',
    },
  },
}

const defaultProps = {
  variant: 'card',
}

const accordion = {
  baseStyle,
  variants,
  defaultProps,
}

export default accordion
