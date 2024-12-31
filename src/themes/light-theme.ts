import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme( {
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#3A64D8'
    }
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 600
    },
    h2: {
      fontSize: 20,
      fontWeight: 400
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed'
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        }
      }
    }
  }
} );