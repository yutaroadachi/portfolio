const textStyles = {
  h1: {
    fontSize: '4xl',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: 'primary',
    textAlign: 'center',
  },
  h2: {
    fontSize: '2xl',
    fontWeight: 'bold',
    color: 'primary',
    textAlign: 'center',
    pos: 'relative',
    mb: 8,
    _after: {
      content: '""',
      w: '30px',
      h: '3px',
      bgColor: 'primary',
      pos: 'absolute',
      bottom: '-3px',
      left: '50%',
      ml: '-15px',
    },
  },
  h3: {
    fontSize: 'xl',
    fontWeight: 'bold',
    color: 'primary',
    textAlign: 'center',
  },
}

export default textStyles
