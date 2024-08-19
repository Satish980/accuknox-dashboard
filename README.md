---

# AccuKnox Dashboard

This repository contains the AccuKnox Dashboard project, a dynamic and interactive dashboard where users can manage categories and widgets. It allows users to add, remove, and search for widgets within different categories.

## Problem Statement

**Assignment:**
1. Create a JSON structure to build this dashboard/widget dynamically.
    - The JSON should contain categories, each of which can contain multiple widgets.
2. Users should be able to dynamically add or remove widgets from a section/category. For example, the "CSPM Executive Dashboard" is a category.
3. For each widget, placeholder text can be used for assignment purposes.
4. When the user clicks on "+Add Widget," they should be able to add a widget name and text, which will then be added to the respective category.
5. Each widget should have a cross icon to remove it from a category, or users can uncheck it from the category list via the "Add Widget" section.
6. Users should be able to search within the list of all widgets.

**Development:**
1. Use React technology to build this page.
2. Use a store management tool to add and remove widgets locally.

## Approach

### Constructing the Dashboard

- **Header**:
    - Navbar with a search bar.
    - Breadcrumb navigation: Home > Dashboard V2.
    - Search bar: "Search anything ..."

- **Body**:
    - **Heading**:
        - Text: "CNAPP Dashboard"
        - Add Widget button.
        - Refresh button.
        - Three-dot action button.
        - Date filter dropdown.
    - **List of Categories**:
        - Each category contains a heading and a list of widgets.
        - Widgets can be added via the "Add Widget" functionality.

### Design Pattern

- **Code Structure**: Atomic design principles are followed, organizing components into Atoms, Molecules, and Organisms.
    - **Atom**: Individual components.
    - **Molecules**: Collections of Atoms.
    - **Organisms**: Collections of Molecules and Atoms.

## Technologies Used

- **Frontend**: React, TypeScript, JavaScript.
- **State Management**: Redux-Bundler.
- **Version Control**: Git and GitHub.
- **Data Storage**: Local JSON file.
- **Bundling**: Vite.
- **Styling**: Tailwind CSS.
- **Icons**: FontAwesome.
- **Deployment**: Netlify.

**Note**: Upon refreshing the page, data will revert to the initial JSON file data.

## Features

- **Add Widget**: Users can add widgets via the "Add Widget" button in each category or through the main header.
- **Search**: Users can search for widgets by name, with debouncing to improve search performance.
- **Remove Widget**: Users can remove widgets by clicking the "x" icon on each widget or unchecking them in the list.
- **Responsiveness**: The dashboard is responsive, adapting to different screen sizes.
- **Modern Frontend**: The project utilizes modern frontend technologies like React and Tailwind CSS.

## To Run in Local Environment

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Satish980/accuknox-dashboard.git
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Run the application**:
    ```bash
    npm run dev
    ```
