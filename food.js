document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommend-btn');
    const foodContainer = document.getElementById('food-container');

    const foodItems = [
        '피자',
        '치킨',
        '떡볶이',
        '짜장면',
        '김치찌개',
        '된장찌개',
        '초밥',
        '파스타',
        '햄버거',
        '라면'
    ];

    recommendBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * foodItems.length);
        const recommendedFood = foodItems[randomIndex];

        const foodName = document.createElement('p');
        foodName.textContent = recommendedFood;

        const foodImage = document.createElement('img');
        // Using place.dog for placeholder images as per the plan
        foodImage.src = `https://place.dog/300/300?random=${Date.now()}`; 

        const imageCredit = document.createElement('p');
        imageCredit.textContent = 'by 나노바나나';
        imageCredit.style.fontSize = '0.8rem';
        imageCredit.style.color = '#777';

        foodContainer.innerHTML = '';
        foodContainer.appendChild(foodName);
        foodContainer.appendChild(foodImage);
        foodContainer.appendChild(imageCredit);
    });
});
