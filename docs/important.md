# Important Project Rules and Guidelines

This document summarizes the key rules and guidelines to follow for the ByteFix Website project.

## General Instructions

*   **Licensing:** This project is PRIVATE and is NOT licensed under the MIT License or any other open-source license. All rights are reserved.
*   **Use WRITE_TO_FILE for Consolidated Changes:**  To minimize API usage, consolidate all necessary file modifications into a single `write_to_file` operation whenever feasible. Avoid making frequent, small changes.
*   **UTF-8 Encoding:** Ensure all files are encoded in UTF-8.
*   **Windows PowerShell Syntax:** Use Windows PowerShell syntax (`;` for command chaining) for CLI commands.
*   **Detailed Commit Messages:** Create detailed and descriptive commit messages for all Git commits.
*   **Push Changes:** Always commit and push changes to the remote repository after completing a set of tasks.
*   **Navigate to Project Directory:** Before executing Git commands, ensure you are in the project directory (`ByteFix-Website`).

## Visual Identity & Styling

*   **Brand Colors:** Adhere to the ByteFix brand color palette: Primary Blue (#0D6EFD), Secondary Dark Gray (#212529), and Accent Light Gray (#F8F9FA). Use lighter and darker variations of these colors as needed for visual distinction and contrast.
*   **Typography:** Use Montserrat (Bold) for headings and Roboto (Regular) for body text, implemented via Google Fonts plugin.
*   **CSS Classes:** Use CSS classes defined in `src/styles/global.css` for all styling. Avoid inline styles in components.
*   **Color Contrast:** Ensure sufficient color contrast between text and background elements for accessibility.
*   **Font Awesome Icons:** Use Font Awesome icons (solid style, monochrome) for icons instead of emojis or special HTML characters.

## Functionality & Components

*   **Motion Library:** Utilize the `motion` library (from `motion/react` and `@motionone/dom`) for animations, especially for smooth scrolling and interactive elements.
*   **Smooth Scrolling:** Implement smooth, tweened scrolling with "ease-in-out" easing for navigation links and buttons that scroll to sections.
*   **Sticky Header:** The header should be sticky and remain visible at the top of the page during scrolling.
*   **Testimonials Section:** The testimonial section now displays all testimonials statically.
*   **Repair Request Form:** Implement a basic repair request form with client-side validation.
*   **Layout Component:** Use a `Layout` component (`src/components/Layout.js`) as the main container for the page structure, housing all sections and importing `global.css`. `index.js` should only call the `Layout` component.
*   **Component Separation:** Separate the landing page into distinct components (Header, HeroSection, ServicesSection, WhyChooseUsSection, TestimonialsSection, RepairRequestFormSection, FooterSection) for better code organization.
*   **Gatsby `<Link>` Component:**  Always use Gatsby's `<Link>` component for internal navigation instead of standard `<a>` tags. This ensures proper client-side routing and improves website performance in Gatsby projects.

## Special Characters

*   **HTML Special Characters:** Be extremely careful with HTML special characters such as `<` and `>`. Do NOT change them to their character representations unless specifically instructed. If needed, use escape strings (e.g., `<`, `>`) to ensure they are rendered correctly as special characters and not interpreted as HTML tags.

## Implementation Focus

*   **Implement All Possible Features:** Strive to implement all requested features and improvements. Avoid leaving manual steps for the user for tasks that can be automated or implemented programmatically.
*   **Consolidate File Modifications:** To minimize API usage, consolidate all file modifications into single `write_to_file` operations where possible.
