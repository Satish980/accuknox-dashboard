import { Category, Widget } from "../types";

// Function to add a widget to a category
export const addWidgetToCategory = (
  categories: Category[],
  categoryId: string,
  widget: Widget
): Category[] => {
  return categories.map((category: Category) =>
    category.id === categoryId
      ? {
          ...category,
          widgets: [...category.widgets, { ...widget, isVisible: true }],
        }
      : category
  );
};

// Function to remove a widget from a category
export const removeWidgetFromCategory = (
  categories: Category[],
  categoryId: string,
  widgetId: string
): Category[] => {
  return categories.map((category: Category) =>
    category.id === categoryId
      ? {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        }
      : category
  );
};

// Function to filter widgets by a search query
export const filterWidgetsBySearchQuery = (
  categories: Category[],
  searchTerm: string
): Category[] => {
  if (!searchTerm) {
    console.log("==== inside no search");
    return categories;
  }
  const lowercasedSearchTerm = searchTerm.trim().toLowerCase();
  return categories.map((category: Category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(lowercasedSearchTerm)
    ),
  }));
};
