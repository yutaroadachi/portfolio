const textStyles = {
  h1: {
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  h2WithTreat: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'main',
    pos: 'relative',
    mb: 8,
    _after: {
      content: '""',
      w: '30px',
      h: '3px',
      bgColor: 'main',
      pos: 'absolute',
      bottom: '-3px',
      left: '50%',
      ml: '-15px',
    },
  },
}

export default textStyles
