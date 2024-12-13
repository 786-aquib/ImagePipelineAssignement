export const createMaskImage = (canvas) => {
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  // Fill with black background
  tempCtx.fillStyle = 'black';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Set white stroke style for the mask
  tempCtx.strokeStyle = 'white';
  tempCtx.lineCap = 'round';
  tempCtx.lineJoin = 'round';

  // Draw all paths from the canvas
  canvas.getObjects().forEach((obj) => {
    if (obj instanceof fabric.Path) {
      const path = obj;
      tempCtx.lineWidth = path.strokeWidth;
      
      const pathData = path.path;
      if (!pathData) return;

      tempCtx.beginPath();
      
      pathData.forEach(point => {
        switch (point[0]) {
          case 'M':
            tempCtx.moveTo(point[1], point[2]);
            break;
          case 'L':
            tempCtx.lineTo(point[1], point[2]);
            break;
          case 'Q':
            tempCtx.quadraticCurveTo(point[1], point[2], point[3], point[4]);
            break;
          case 'C':
            tempCtx.bezierCurveTo(point[1], point[2], point[3], point[4], point[5], point[6]);
            break;
        }
      });
      
      tempCtx.stroke();
    }
  });

  return tempCanvas.toDataURL('image/png');
};