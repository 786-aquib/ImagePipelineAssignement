# Canvas Drawing Tool with Mask Generation

This project is a React-based canvas editor that enables users to upload images, draw freehand, and generate mask images. It leverages the `fabric.js` library for managing the canvas and drawing operations. The mask generation feature is designed to create a binary mask (black background with white strokes) of user-drawn paths.

---

## How to Run the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/786-aquib/ImagePipelineAssignement/tree/main
   cd canvas-editor

   ```

2. **Install Dependencies**
   Run the following command to install the required libraries:
   npm install

3. **Start the Development Server**
   Use this command to start the application locally:
   npm run dev

4. **Access the Application**
   Open your browser and navigate to http://localhost:5173.

Libraries Used
**React**  
Used for building the user interface and managing component state.

**Fabric.js**
A robust JavaScript library for working with canvas elements.
Enabled features like freehand drawing, background image handling, and dynamic object manipulation.

**FileReader API**
Used for uploading and reading image files before setting them as the canvas background.

## Challenges Faced and Solutions

1. **Learning Canvas Operations with Fabric.js**
   **Challenge:\***
   This was my first experience working with fabric.js and canvas-based drawing tools. Understanding how to configure a drawing brush, manage objects, and set background images required some research and experimentation.

**Solution:**
I referred to the official fabric.js documentation and explored examples to learn how to:

## Create and customize a canvas.

Enable drawing mode with the pencil brush.
Scale and position uploaded images dynamically. 2. **Implementing Mask Generation**
**Challenge:**
Generating a mask image from the canvas was a new concept for me. I had to ensure that the drawn paths were converted into a binary image (black and white) without including unnecessary details like the background image.

**Solution:**
I used a temporary <canvas> element to redraw all paths from the main canvas. The paths were drawn in white on a black background to create the mask. This approach allowed me to isolate user-drawn strokes while excluding other objects.
