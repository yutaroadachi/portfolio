const headings = {
  h1: {
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  h2WithTreat: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    pos: 'relative',
    _after: {
      content: '""',
      w: '30px',
      h: '3px',
      bgColor: 'currentColor',
      pos: 'absolute',
      bottom: '-3px',
      left: '50%',
      ml: '-15px',
    },
  },
}

const textStyles = {
  ...headings,
}

export default textStyles
