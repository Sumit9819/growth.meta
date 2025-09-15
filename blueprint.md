# Project Blueprint

## Overview

A modern and professional website for a growth marketing agency called "Growth.meta." The website is designed to attract clients and showcase the agency's services. It features a clean, vibrant, and modern design with a data-driven aesthetic. The application is fully responsive and provides a seamless user experience across all devices.

## Implemented Features

### Design and Styling

*   **Modern & Vibrant Design:** The website has a modern, energetic, and professional design that reflects the agency's expertise in growth marketing. It features a bold color palette, expressive typography, and interactive elements.
*   **Responsive Design:** The application is fully responsive and works seamlessly on mobile and web devices, ensuring a consistent user experience across all screen sizes.
*   **Engaging Visuals:** The website uses high-quality placeholder images, modern icons, and a multi-layered drop shadow effect to create an engaging and visually appealing user experience.
*   **Expressive Typography:** The typography is clean, readable, and uses a variety of font sizes and weights to emphasize key information, improving scannability and visual hierarchy.
*   **Intuitive Layout:** The layout is intuitive and easy to navigate, with clear calls-to-action that guide the user through the website. The use of white space and a balanced layout creates a clean and uncluttered user interface.
*   **Interactive Elements:** The website includes interactive elements such as buttons with a "glow" effect, cards with a "lifted" shadow effect, and smooth transitions to enhance the user experience.
*   **Dark Mode:** The application features a dark mode toggle that allows users to switch between a light and dark theme. The theme is persisted in the user's browser.

### Core Features

*   **Homepage:** A comprehensive homepage that includes:
    *   A hero section with a strong headline and clear calls-to-action.
    *   A "Services" section that provides an overview of the agency's services.
    *   A "Testimonials" section with client testimonials to build trust and credibility.
    *   A "Blog" section that displays the three most recent blog posts.
*   **Services Page:** A dedicated page that lists all of the services offered by the agency, with detailed descriptions and icons.
*   **Contact Page:** A page with a modern contact form and other contact information for potential clients to get in touch.
*   **Functional Contact Form:** The contact form is fully functional and uses a Next.js Server Action to handle submissions.
    *   **Server-Side Logic:** The form submission is handled by a Server Action, ensuring that the logic is secure and efficient.
    *   **Validation:** The form uses `zod` for validation, providing clear error messages to the user.
    *   **State Management:** The `useFormState` and `useFormStatus` hooks are used to manage the form state, providing a seamless user experience.
    *   **Auto-Clearing:** The form automatically clears upon successful submission, providing clear feedback to the user.
*   **Blog Page:** A blog page that displays all of the blog posts in a clean, grid-based layout.
*   **Single Blog Post Page:** A dedicated page for each individual blog post, with a clean and readable layout.
*   **Get Started Page:** A simple page that directs users to the contact page, as a starting point for their journey with Growth.meta.
*   **Header and Footer:** A modern and consistent header and footer are used across all pages of the website.

### Backend and Database

*   **Database:** Vercel Postgres is used for the database.
*   **Tables:**
    *   `authors`: Stores information about the blog post authors.
    *   `posts`: Stores the blog post content.

## Current Task

*   **Implement Functional Contact Form:** The contact form on the contact page has been made functional using a Next.js Server Action. This includes validation, state management, and auto-clearing of the form on successful submission.
