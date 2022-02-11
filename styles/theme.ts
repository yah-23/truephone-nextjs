import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme(
  {
    colors: {
      gray: {
        100: '#E5E5E5',
        300: '#d3d8dd',
        500: '#747474',
      },
      blue: {
        700: '#3D3ADA',
      },
      green: {
        300: '#12C223',
      },
    },
    components: {
      Button: {
        variants: {
          solid: {
            bg: 'blue.700',
            py: 6,
            px: 7,
            fontSize: 'lg',
            lineHeight: 'short',
          },
          outline: {
            color: 'gray.500',
            fontSize: 'lg',
            lineHeight: 'short',
            py: 6,
            px: 5,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'blue',
  }),
)

export default theme
