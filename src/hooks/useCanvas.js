import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { setupCanvas, handleImageLoad } from '../utils/canvas';
import { createMaskImage } from '../utils/mask';

export const useCanvas = (canvasRef, onMaskGenerated) => {
  const [canvas, setCanvas] = useState(null);
  const [brushSize, setBrushSize] = useState(20);

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
        isDrawingMode: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
      });

      setupCanvas(fabricCanvas, brushSize);
      setCanvas(fabricCanvas);

      return () => {
        fabricCanvas.dispose();
      };
    }
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = brushSize;
    }
  }, [brushSize, canvas]);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      fabric.Image.fromURL(e.target.result, (img) => {
        handleImageLoad(canvas, img);
      });
    };
    reader.readAsDataURL(file);
  };

  const clearCanvas = () => {
    if (canvas) {
      const backgroundImage = canvas.backgroundImage;
      canvas.clear();
      canvas.backgroundColor = '#ffffff';
      if (backgroundImage) {
        canvas.setBackgroundImage(backgroundImage, canvas.renderAll.bind(canvas));
      }
      canvas.renderAll();
    }
  };

  const generateMask = () => {
    if (!canvas) return;

    const originalImage = canvas.toDataURL({
      format: 'png',
      quality: 1,
    });

    const maskImage = createMaskImage(canvas);
    onMaskGenerated(originalImage, maskImage);
  };

  return {
    brushSize,
    setBrushSize,
    handleImageUpload,
    clearCanvas,
    generateMask,
  };
};