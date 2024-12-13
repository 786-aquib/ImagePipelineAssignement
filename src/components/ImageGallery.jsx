import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

export const ImageGallery = ({ images }) => {
  if (!images.original && !images.mask) return null;

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Generated Images
      </Typography>
      <Grid container spacing={4}>
        {images.original && (
          <Grid item xs={12} md={6}>
            <ImageCard
              title="Original Image"
              src={images.original}
              alt="Original"
            />
          </Grid>
        )}
        {images.mask && (
          <Grid item xs={12} md={6}>
            <ImageCard
              title="Mask Image"
              src={images.mask}
              alt="Mask"
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

const ImageCard = ({ title, src, alt }) => (
  <Paper elevation={2} sx={{ p: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        borderRadius: 1,
        border: 1,
        borderColor: 'divider'
      }}
    />
  </Paper>
);