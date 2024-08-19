import { Category, Widget } from "../types";

// to add a widget to a category
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

// to remove a widget from a category
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

// to filter widgets by a search query
export const filterWidgetsBySearchQuery = (
  categories: Category[],
  searchTerm: string
): Category[] => {
  if (!searchTerm) {
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