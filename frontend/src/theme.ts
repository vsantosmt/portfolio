import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0a0a0a',
      light: '#1a1a1a',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00d4ff',
      light: '#42d9ff',
      dark: '#0099cc',
      contrastText: '#000000',
    },
    background: {
      default: '#0a0a0a',
      paper: '#151515',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
    success: {
      main: '#00ff94',
      light: '#4dffb6',
      dark: '#00cc75',
    },
    warning: {
      main: '#ff6b35',
      light: '#ff8c69',
      dark: '#cc5529',
    },
    info: {
      main: '#7c3aed',
      light: '#a855f7',
      dark: '#5b21b6',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      letterSpacing: '0.02em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#151515',
          border: '1px solid #333',
          borderRadius: 16,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;