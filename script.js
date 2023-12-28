function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function generateRandomPattern() {
    const artContainer = document.getElementById('art-container');
    artContainer.innerHTML = ''; 

    const numberOfRectangles = 10; 

    for (let i = 0; i < numberOfRectangles; i++) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');

        // Set width and height based on the Golden Ratio
        const width = Math.random() * 100 + 50;
        const height = width * (Math.sqrt(5) + 1) / 2;

        rectangle.style.width = `${width}px`;
        rectangle.style.height = `${height}px`;

        // Set a random background color
        rectangle.style.backgroundColor = getRandomColor();

        artContainer.appendChild(rectangle);
    }
}

generateRandomPattern();
