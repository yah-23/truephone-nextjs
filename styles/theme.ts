import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      100: '#E5E5E5',
      300: '#d3d8dd'
    },
    purple: {
      700: '#3D3ADA'
    },
    green: {
      300: '#12C223'
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
      
      },
      sizes: {
        lg: {
          fontSize: 'xl',
        }
      }
    }
  }
}, withDefaultColorScheme({
  colorScheme: 'purple'
}))

export default theme