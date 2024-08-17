// src/store.ts
import { create } from "zustand";
import { DashboardState } from "./types";
import { initialDashboardData } from "./constants";

const useDashboardStore = create<DashboardState>((set, get) => ({
  categories: initialDashboardData,

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  addCategory: (categoryName) =>
    set((state) => ({
      categories: [
        ...state.categories,
        { id: `cat-${Date.now()}`, name: categoryName, widgets: [] },
      ],
    })),

  removeCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.filter(
        (category) => category.id !== categoryId
      ),
    })),

  addWidgetToCategory: (categoryId, widgetName, widgetContent) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: [
                ...category.widgets,
                {
                  id: `widget-${Date.now()}`,
                  name: widgetName,
                  content: widgetContent,
                  isVisible: true,
                },
              ],
            }
          : category
      ),
    })),

  removeWidgetFromCategory: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      ),
    })),

  toggleWidgetVisibility: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.map((widget) =>
                widget.id === widgetId
                  ? { ...widget, isVisible: !widget.isVisible }
                  : widget
              ),
            }
          : category
      ),
    })),

  searchWidgets: () => {
    const { categories, searchQuery } = get();
    if (!searchQuery) return [];
    const lowerCaseQuery = searchQuery.toLowerCase();

    return categories.flatMap((category) =>
      category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(lowerCaseQuery)
      )
    );
  },
}));

export default useDashboardStore;
