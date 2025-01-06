import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
// src/main.tsx
import './global.css'; // ou './global.css', dependendo do caminho do seu arquivo CSS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
