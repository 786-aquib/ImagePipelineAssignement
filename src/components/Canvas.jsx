import React, { useRef } from 'react';
import { Box, Paper } from '@mui/material';
import { CanvasControls } from './CanvasControls';
import { useCanvas } from '../hooks/useCanvas';

export const Canvas = ({ onMaskGenerated }) => {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const {
    brushSize,
    setBrushSize,
    handleImageUpload,
    clearCanvas,
    generateMask,
  } = useCanvas(canvasRef, onMaskGenerated);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <CanvasControls
        onUpload={handleImageUpload}
        brushSize={brushSize}
        onBrushSizeChange={setBrushSize}
        onClear={clearCanvas}
        onGenerate={generateMask}
        fileInputRef={fileInputRef}
      />
      <Paper elevation={2} sx={{ p: 2 }}>
        <canvas
          ref={canvasRef}
          style={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
          }}
        />
      </Paper>
    </Box>
  );
};