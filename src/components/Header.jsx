import React from 'react';
import { Box, Typography } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';

export const Header = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
    <Box sx={{ p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
      <BrushIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    </Box>
    <Box>
      <Typography variant="h1" sx={{ color: 'text.primary' }}>
        Image Inpainting Widget
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 1 }}>
        Upload an image and draw on it to create a mask
      </Typography>
    </Box>
  </Box>
);