import * as NextImage from 'next/image'
import '../src/styles/globals.css'

const customViewports = {
  /** iPhone SE */
  base: {
    name: 'base',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
  /** iPad mini */
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  /** MacBook Pro 13インチ */
  lg: {
    name: 'lg',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  backgrounds: {
    default: 'bg',
    values: [
      {
        name: 'bg',
        value: '#fff5e4',
      },
    ],
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'lg',
  },
}

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})
