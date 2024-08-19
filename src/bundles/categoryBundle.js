import {
  FETCH_STATUS,
  CATEGORY_ACTIONS,
  INITIAL_CATEGORY_BUNDLE_DATA,
  CATEGORY_BUNDLE_STATE,
} from "./constants";
import {
  addWidgetToCategory,
  removeWidgetFromCategory,
  filterWidgetsBySearchQuery,
} from "./scripts";

const categoryBundle = {
  name: "categoryBundle",

  reducer: (state = INITIAL_CATEGORY_BUNDLE_DATA, action) => {
    switch (action.type) {
      case CATEGORY_ACTIONS.FETCH_CATEGORIES_REQUEST: {
        return {
          ...state,
          fetchStatus: FETCH_STATUS.IN_PROGRESS,
        };
      }

      case CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS: {
        return {
          ...state,
          fetchStatus: FETCH_STATUS.SUCCESS,
          categories: action.payload,
        };
      }

      case CATEGORY_ACTIONS.FETCH_CATEGORIES_FAILED: {
        return {
          ...state,
          fetchStatus: FETCH_STATUS.FAILED,
        };
      }

      case CATEGORY_ACTIONS.ADD_WIDGET_SUCCESS: {
        const { categoryId, widget } = action.payload;
        return {
          ...state,
          categories: addWidgetToCategory(state.categories, categoryId, widget),
        };
      }

      case CATEGORY_ACTIONS.REMOVE_WIDGET_SUCCESS: {
        const { categoryId, widgetId } = action.payload;
        return {
          ...state,
          categories: removeWidgetFromCategory(
            state.categories,
            categoryId,
            widgetId
          ),
        };
      }

      case CATEGORY_ACTIONS.SEARCH_WIDGET_SUCCESS: {
        const searchTerm = action.payload;
        if (!searchTerm) {
          return {
            ...INITIAL_CATEGORY_BUNDLE_DATA,
            categoryBundleState: CATEGORY_BUNDLE_STATE.SEARCH_WIDGET,
          };
        }
        return {
          ...state,
          categories: filterWidgetsBySearchQuery(state.categories, searchTerm),
        };
      }

      case CATEGORY_ACTIONS.UPDATE_CATEGORIES: {
        return {
          ...state,
          categories: action.payload,
        };
      }

      default:
        return state;
    }
  },

  // Action Creators
  doFetchCategories:
    () =>
    ({ dispatch }) => {
      dispatch({ type: CATEGORY_ACTIONS.FETCH_CATEGORIES_REQUEST });
      dispatch({
        type: CATEGORY_ACTIONS.FETCH_CATEGORIES_SUCCESS,
        payload: INITIAL_CATEGORY_BUNDLE_DATA.categories,
      });
    },

  doAddWidget:
    (categoryId, widget) =>
    ({ dispatch }) => {
      dispatch({
        type: CATEGORY_ACTIONS.ADD_WIDGET_SUCCESS,
        payload: { categoryId, widget },
      });
    },

  doRemoveWidget:
    (categoryId, widgetId) =>
    ({ dispatch }) => {
      dispatch({
        type: CATEGORY_ACTIONS.REMOVE_WIDGET_SUCCESS,
        payload: { categoryId, widgetId },
      });
    },

  doSearchWidget:
    (searchTerm) =>
    ({ dispatch }) => {
      dispatch({
        type: CATEGORY_ACTIONS.SEARCH_WIDGET_SUCCESS,
        payload: searchTerm,
      });
    },

  doUpdateCategoryWidgets:
    (categories) =>
    ({ dispatch }) => {
      dispatch({
        type: CATEGORY_ACTIONS.UPDATE_CATEGORIES,
        payload: categories,
      });
    },

  // Selectors
  selectCategories: (state) => state.categoryBundle.categories,
  selectFetchStatus: (state) => state.categoryBundle.fetchStatus,
  selectCategoryBundleState: (state) =>
    state.categoryBundle.categoryBundleState,
  selectSearchQuery: (state) => state.categoryBundle.searchQuery,
  selectFilteredWidgets: (state) => state.categoryBundle.filteredWidgets,

  // init function to initialize
};

export default categoryBundle;
