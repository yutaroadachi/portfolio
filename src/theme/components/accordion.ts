const baseStylePanel = {
  pb: 4,
}

const baseStyle = {
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
