---

# AccuKnox Dashboard

This repository contains the AccuKnox Dashboard project, a dynamic and interactive dashboard where users can manage categories and widgets. It allows users to add, remove, and search for widgets within different categories.

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
