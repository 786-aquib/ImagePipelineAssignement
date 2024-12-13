export const setupCanvas = (canvas, brushSize) => {
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  canvas.freeDrawingBrush.color = 'black';
  canvas.freeDrawingBrush.width = brushSize;
};

export const handleImageLoad = (canvas, img) => {
  const scale = Math.min(
    canvas.width / img.width,
    canvas.height / img.height
  );
  
  img.set({
    scaleX: scale,
    scaleY: scale,
    selectable: false,
    evented: false,
  });

  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  canvas.renderAll();
};