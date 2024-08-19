export interface Widget {
  id: string;
  name: string;
  content: string;
  isVisible: boolean;
}

export interface Category {
  id: string;
  keyName: string;
  name: string;
  widgets: Widget[];
}

export interface DashboardState {
  categories: Category[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addCategory: (categoryName: string) => void;
  removeCategory: (categoryId: string) => void;
  addWidgetToCategory: (categoryId: string, widgetName: string, widgetContent: string) => void;
  removeWidgetFromCategory: (categoryId: string, widgetId: string) => void;
  toggleWidgetVisibility: (categoryId: string, widgetId: string) => void;
  searchWidgets: () => Widget[];
}

export interface CategoryBundle {
  categories: Category[];
  fetchStatus: number;
  categoryBundleState: number;
}