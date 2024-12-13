import React, { useState } from 'react';
import { Container, Paper, Box } from '@mui/material';
import { Canvas } from './components/Canvas';
import { Header } from './components/Header';
import { ImageGallery } from './components/ImageGallery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

function App() {
  const [images, setImages] = useState({
    original: null,
    mask: null,
  });

  const handleMaskGenerated = (originalImage, maskImage) => {
    setImages({
      original: originalImage,
      mask: maskImage,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Header />
            <Canvas onMaskGenerated={handleMaskGenerated} />
          </Paper>
          <ImageGallery images={images} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;