const baseStyle = {
  borderRadius: 'full',
  _hover: {
    opacity: 0.8,
  },
}

const variants = {
  primary: {
    bgColor: 'main',
    color: 'white',
  },
  outlined: {
    bgColor: 'base',
    color: 'main',
    borderWidth: '1px',
    borderColor: 'main',
  },
}

const defaultProps = {
  variant: 'primary',
}

const button = {
  baseStyle,
  variants,
  defaultProps,
}

export default button
