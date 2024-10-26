import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthModal from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '0.875rem',
          fontWeight: 500,
          borderRadius: '20px',
          color: 'black',
          borderColor: 'black'
        },
      },
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h6: {
      fontSize: '1.125rem', // Matches the style of the title
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem', // General body text
    },
    button: {
      textTransform: 'none', // Remove button text transformation (uppercase)
      fontSize: '0.875rem',
      fontWeight: 500,
      borderRadius: '20px'
    },
    caption: {
      fontSize: '0.75rem',
      color: '#70757a', // Slightly muted color for secondary text
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <AuthModal />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
