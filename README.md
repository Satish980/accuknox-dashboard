# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



Assignment:
1.Create a Json to build this dashboard / widget dynamically.
Json should contain categories and each category can contain
multiple widgets.
2. Users should be able to dynamically add a widget and remove a
widget from a section/ category. eg : CSPM Executive dashboard
is a category.
3. For individual widget, for assignment purposes we can just put
random text.
4. Once the user clicks on +Add Widget, users should be able to
add Widget name, widget text , and it should be added to that
category.
5. On each widget, we can have a cross icon to remove it from a
category or users can go to add category section and uncheck
from category list
6. Users should be able to search in a list of all the widgets.
Development:
1. Please use React technology to build this page
2. Please use any store management tool to add widget and
remove widget locally

Construct a dashboard
Header 
    - Navbar with Search bar
    Home > Dashboard v2
    Search bar > Search anything ...
Body 
    Heading 
        - Text
        - Add Widget
        - Refresh
        - Three Dot Action
        - Date Filter
    List of Categories
        Each category contains heading and list
            - Heading
            - Horizontal List with Add widget functionality

        




Categories List
  Category name
  List of Widgets


Organism
Molecules
  - Category Card
Atoms
  - Widget Card