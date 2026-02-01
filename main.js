document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers');
    const generateBtn = document.getElementById('generate-btn');

    function generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        displayNumbers(Array.from(numbers));
    }

    function displayNumber(number) {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        numbersContainer.appendChild(circle);
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        numbers.forEach(number => {
            displayNumber(number);
        });
    }

    generateBtn.addEventListener('click', generateNumbers);

    // Initial generation
    generateNumbers();
});