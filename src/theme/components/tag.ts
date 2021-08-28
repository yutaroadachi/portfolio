const variants = {
  primary: {
    container: {
      bgColor: 'main',
      color: 'white',
    },
  },
  outlined: {
    container: {
      bgColor: 'base',
      color: 'main',
      borderWidth: '1px',
      borderColor: 'main',
    },
  },
}

const defaultProps = {
  variant: 'primary',
}

const tag = {
  variants,
  defaultProps,
}

export default tag
