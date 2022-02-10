import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: {
    body: {
      fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      bgColor: 'base',
    },
    // next/image用
    '.circle-image': {
      borderRadius: '50%',
    },
    '.blog-detail': {
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
      a: {
        color: 'link',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
}

export default styles
