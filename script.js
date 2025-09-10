const canvas = document.getElementById('drawing-canvas');
let isDrawing = false;
let startPoint = { x: 0, y: 0 };
let currentLine = null;

// Function to start drawing
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    startPoint = {
        x: event.offsetX,
        y: event.offsetY
    };

    // Create a new SVG line element
    currentLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    currentLine.setAttribute('x1', startPoint.x);
    currentLine.setAttribute('y1', startPoint.y);
    currentLine.setAttribute('x2', startPoint.x);
    currentLine.setAttribute('y2', startPoint.y);
    currentLine.setAttribute('stroke', '#000000');
    currentLine.setAttribute('stroke-width', '2');
    currentLine.setAttribute('stroke-linecap', 'round');

    // Add the new line to the SVG canvas
    canvas.appendChild(currentLine);
});

// Function to update the line while drawing
canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    // Get the current mouse position
    const endPoint = {
        x: event.offsetX,
        y: event.offsetY
    };

    // Update the line's end point
    if (currentLine) {
        currentLine.setAttribute('x2', endPoint.x);
        currentLine.setAttribute('y2', endPoint.y);
    }
});

// Function to stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    currentLine = null; // Reset the current line to prepare for a new one
});

// Optional: Stop drawing if the mouse leaves the canvas area
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    currentLine = null;
});