# ByteFix Website

***

<p align="center">💻 ByteFix: Reliable Tech Solutions, Simplified</p>

***

## Table of Contents

*   [Project Overview](#project-overview)
*   [Project Structure](#project-structure)
*   [Technologies Used](#technologies-used)
*   [Setup Instructions](#setup-instructions)
*   [Current Status](#current-status)
*   [Contributing](#contributing)
*   [License](#license)

## Project Overview

This project aims to create a modern and engaging website for ByteFix, a tech solutions provider. The website is built using Gatsby, a React-based static site generator, and follows the brand guidelines outlined in `docs/BRAND_GUIDELINES.md`. The goal is to provide a user-friendly experience that effectively communicates ByteFix's brand essence and core values.

## Project Structure

The project is structured as follows:

*   `gatsby-config.js`: Gatsby configuration file, including plugins and site metadata.
*   `src/`: Contains the source code for the website.
    *   `components/`: Reusable React components.
        *   `Header.js`: The website's header component, including navigation links and a placeholder logo.
    *   `pages/`: React components that represent different pages of the website.
        *   `index.js`: The landing page for the website, implementing the ByteFix brand.
    *   `styles/`: CSS files for styling the website.
        *   `global.css`: Global CSS file containing CSS classes for the color palette, typography, and layout.
*   `docs/`: Directory containing project documentation.
    *   `BRAND_GUIDELINES.md`: Contains the ByteFix brand guidelines.
    *   `GAMEPLAN.md`: Contains the website update game plan and future improvement suggestions.
*   `static/`: Directory for static assets, such as images and fonts.

## Technologies Used

*   Gatsby: A React-based static site generator.
*   React: A JavaScript library for building user interfaces.
*   CSS: Styling language for web pages.
*   Framer Motion: A production-ready motion library for React.

## Setup Instructions

To run the website locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone [repository URL]
    ```
2.  Navigate to the project directory:
    ```bash
    cd ByteFix-Website
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    gatsby develop
    ```
5.  Open the website in your browser at `http://localhost:8000`.

## Current Status

The website's landing page (`src/pages/index.js`) has been updated with the ByteFix brand's color palette, typography, and placeholder content. A basic navigation header has been implemented. The `gatsby-plugin-google-fonts` plugin has been added and configured to load the Montserrat and Roboto fonts.

## Contributing

Contributions to the project are welcome! To contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
