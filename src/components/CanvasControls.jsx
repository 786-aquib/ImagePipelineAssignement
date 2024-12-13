import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import {
  Upload as UploadIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';

export const CanvasControls = ({
  onUpload,
  brushSize,
  onBrushSizeChange,
  onClear,
  onGenerate,
  fileInputRef,
}) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3, justifyContent: 'center' }}>
    <Button
      variant="contained"
      startIcon={<UploadIcon />}
      onClick={() => fileInputRef.current?.click()}
    >
      Upload Image
    </Button>
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      onChange={onUpload}
      style={{ display: 'none' }}
    />
    <BrushSizeControl
      brushSize={brushSize}
      onChange={onBrushSizeChange}
    />
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={onClear}
    >
      Clear
    </Button>
    <Button
      variant="contained"
      color="success"
      startIcon={<DownloadIcon />}
      onClick={onGenerate}
    >
      Generate Mask
    </Button>
  </Box>
);

const BrushSizeControl = ({ brushSize, onChange }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1,
    bgcolor: 'background.paper',
    px: 2,
    py: 1,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider'
  }}>
    <IconButton
      size="small"
      onClick={() => onChange(Math.max(1, brushSize - 5))}
    >
      <RemoveIcon />
    </IconButton>
    <Typography sx={{ minWidth: 100, textAlign: 'center' }}>
      Brush: {brushSize}px
    </Typography>
    <IconButton
      size="small"
      onClick={() => onChange(Math.min(50, brushSize + 5))}
    >
      <AddIcon />
    </IconButton>
  </Box>
);