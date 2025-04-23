function backgroundMatrixCodespace() {
    let canva = document.createElement('canvas');
    canva.id = 'matrix';
    document.body.appendChild(canva); // Append the canvas to the body
    const matrixCodeSpace = document.getElementById("matrix");
    const matrixContext = matrixCodeSpace.getContext("2d");
    // Setting the canvas width and height same as the page dimensions
    matrixCodeSpace.width = window.innerWidth;
    matrixCodeSpace.height = window.innerHeight;
    const width = matrixCodeSpace.width;
    const height = matrixCodeSpace.height;
    // Filling the background with pure black
    matrixContext.fillStyle = "#000";
    matrixContext.fillRect(0, 0, width, height);
    // Setting 20 columns and all y positions on 0
    const columns = Math.floor(width / 20) + 1;
    const yPosition = Array(columns).fill(0);

    function matrix() {
        // Painting the canvas background with black but on a really low opacity
        matrixContext.fillStyle = "#0001";
        matrixContext.fillRect(0, 0, width, height);
        // Choosing the green color for the emerging appearing chars and setting a font
        matrixContext.fillStyle = "#0f0";
        matrixContext.font = "15pt monospace";

        yPosition.forEach((y, index) => {
            // For every 'y' position of every column, generate a random char and set it on the right spot
            const text = String.fromCharCode(33 + Math.random() * 94);
            const x = index * 20;
            matrixContext.fillText(text, x, y);
            // Now, if y position is > height, reset it to 0
            if (y > height + Math.random() * 10000)
                yPosition[index] = 0;
            else // otherwise, it increments by 20
                yPosition[index] = y + 20;
        });
    }
    // Finally, setting the matrix function to execute every 76 milliseconds in a loop
    setInterval(matrix, 76);
    return canva;
}

export default {
    backgroundMatrixCodespace
};