document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers');
    const generateBtn = document.getElementById('generate-btn');
    const themeSwitch = document.getElementById('checkbox');

    // Function to set the theme
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeSwitch.checked = true;
            console.log('Dark mode enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeSwitch.checked = false;
            console.log('Dark mode disabled');
        }
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setTheme(false);
    } else {
        setTheme(true);
    }

    // Theme switcher event listener
    themeSwitch.addEventListener('change', () => {
        setTheme(themeSwitch.checked);
    });

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