document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');
    const startButton = document.getElementById('start-button');
    const colorDisplay = document.getElementById('color-display');
    let selectedColors = [];
    let colorInterval;

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            option.classList.toggle('selected');
        });
    });

    startButton.addEventListener('click', () => {
        selectedColors = Array.from(document.querySelectorAll('.color-option.selected')).map(option => option.dataset.color);

        if (selectedColors.length === 0) {
            alert('Bitte wählen Sie mindestens eine Farbe aus.');
            return;
        }

        document.getElementById('color-selection').style.display = 'none';
        startButton.style.display = 'none';
        colorDisplay.style.display = 'block';

        startColorCycle();
    });

    function startColorCycle() {
        if (colorInterval) {
            clearInterval(colorInterval);
        }

        changeColor();

        colorInterval = setInterval(changeColor, getRandomInterval());
    }

    function changeColor() {
        const randomColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
        colorDisplay.style.backgroundColor = randomColor;

        clearInterval(colorInterval);
        colorInterval = setInterval(changeColor, getRandomInterval());
    }

    function getRandomInterval() {
        return Math.random() * 2500 + 500; // Zufälliges Intervall zwischen 500ms und 3000ms
    }
});
