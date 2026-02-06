# Project Blueprint

## Overview

A web application with three main features: a food recommendation page, a lotto number generator page, and a contact form page for partnership inquiries.

## Implemented Features

### Food Recommendation Page (Main Page)

*   **Title:** "오늘 뭐먹지?" (What should I eat today?)
*   **Food Recommendation Button:** Generates and displays a random food name.
*   **Food Image Display:** Shows a food image along with an "by 나노바나나" credit, generated using Unsplash based on the food name.
*   **Navigation:** Links to the Lotto Number Generator page and the Contact Form page.

### Lotto Number Generator Page

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Number Display:** Displays the generated numbers in colored circles.
*   **Responsive Design:** The layout is centered and adapts to different screen sizes.
*   **Dark Mode (Default):** The application defaults to dark mode with a toggle switch for light mode.
*   **Navigation:** Links to the Food Recommendation page and the Contact Form page.

### Contact Form Page

*   **Title:** "제휴 문의" (Partnership Inquiry)
*   **Formspree Integration:** A simple contact form (Name, Email, Message) integrated with Formspree for handling submissions.
*   **Navigation:** Links to the Food Recommendation page and the Lotto Number Generator page.

## Project Structure Changes

*   `food.html` renamed to `index.html` (now the main entry point).
*   `food.css` renamed to `style.css`.
*   `food.js` renamed to `main.js`.
*   Original `index.html` renamed to `lotto.html`.
*   Original `style.css` moved to `lotto.css`.
*   Original `main.js` moved to `lotto.js`.
*   New `contact.html` created for the inquiry form.

## Current Task: None