
# To run in local environment
clone the repository
 git clone https://github.com/Satish980/accuknox-dashboard.git
install modules
  npm install
run the application
  npm run dev


# problem statement
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

# approach of constructing data

Constructing a dashboard
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
        Categories List
        - Category name
        - List of Widgets
        Each category contains heading and list
            - Heading
            - Horizontal List with Add widget functionality

# Design pattern

Code structure - Atomic structure which contains Organism, Molecules and Atoms
Atom - Individual components
Molecules - Collection of Atoms
Organisms - Collection of Molecules and Atoms


# Technologies Used: 
For Frontend: React, Typescript and Javascript
For State management: Redux-Bundler
For versioning: Git and Github
For Memory management: Local json file to store data
For Bundling: Vite
For styling: Tailwind CSS
For Icons: Fontawesome
For deploying netlify
Note: On refresh of page data will be restored to json file data

# Features: 
- User can add widget by using add widget from category list and add/remove from add widget button in the header
- User can search the widget by name
- User can remove widget on clicking x icon on the widget and unchecking from the list 
- Responsiveness
Used modern technologies like React and Tailwind css to code frontend
and added debouncing to delay the search
