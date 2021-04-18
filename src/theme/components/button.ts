const baseStyle = {
  borderRadius: 'full',
  _hover: {
    opacity: 0.8,
  },
}

const variants = {
  primary: {
    bgColor: 'primary',
    color: 'gray.800',
  },
}

const defaultProps = {
  variant: 'primary',
}

export default {
  baseStyle,
  variants,
  defaultProps,
}
