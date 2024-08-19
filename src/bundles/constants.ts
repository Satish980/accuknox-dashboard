import { Category, CategoryBundle } from "../types";

const categoryData: Category[] = [
  {
    id: "cspm_executive_dashboard",
    name: "CSPM Executive Dashboard",
    keyName: "CSPM",
    widgets: [
      {
        id: "cloud_accounts",
        name: "Cloud Accounts",
        content: "Connected: 2, Not Connected: 2",
        isVisible: true,
      },
      {
        id: "cloud_account_risk_assessment",
        name: "Cloud Account Risk Assessment",
        content: "Failed: 1689, Warning: 681, Not available: 36, Passed: 7253",
        isVisible: true,
      },
    ],
  },
  {
    id: "cwpp_dashboard",
    name: "CWPP Dashboard",
    keyName: "CWPP",
    widgets: [
      {
        id: "namespace_specific_alerts",
        name: "Top 5 Namespace Specific Alerts",
        content: "No Graph data available!",
        isVisible: true,
      },
      {
        id: "workload_alerts",
        name: "Workload Alerts",
        content: "No Graph data available!",
        isVisible: true,
      },
    ],
  },
  {
    id: "registry_scan",
    name: "Registry Scan",
    keyName: "Registry",
    widgets: [
      {
        id: "image_risk_assessment",
        name: "Image Risk Assessment",
        content: "Critical: 9, High: 150, Medium: 601, Low: 700",
        isVisible: true,
      },
      {
        id: "image_security_issues",
        name: "Image Security Issues",
        content: "Critical: 2, High: 2, Medium: 2, Low: 2",
        isVisible: true,
      },
    ],
  },
];

// fetch status
const FETCH_STATUS = {
  IDLE: 0,
  IN_PROGRESS: 1,
  SUCCESS: 2,
  FAILED: 3,
};

// state of category bundle
const CATEGORY_BUNDLE_STATE = {
  FETCH_CATEGORIES: 0,
  ADD_WIDGET_TO_CATEGORY: 1,
  REMOVE_WIDGET_FROM_CATEGORY: 2,
  SEARCH_WIDGET: 3,
};

// actions
const CATEGORY_ACTIONS = {
  FETCH_CATEGORIES_REQUEST: "FETCH_CATEGORIES_REQUEST",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "FETCH_CATEGORIES_FAILED",
  ADD_WIDGET_SUCCESS: "ADD_WIDGET_SUCCESS",
  REMOVE_WIDGET_SUCCESS: "REMOVE_WIDGET_SUCCESS",
  SEARCH_WIDGET_SUCCESS: "SEARCH_WIDGET_SUCCESS",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  FILTER_WIDGETS: "FILTER_WIDGETS",
  TOGGLE_WIDGET_VISIBILITY: "TOGGLE_WIDGET_VISIBILITY",
  UPDATE_CATEGORY_WIDGETS: "UPDATE_CATEGORY_WIDGETS"
};


const INITIAL_CATEGORY_BUNDLE_DATA: CategoryBundle = {
  categories: categoryData,
  fetchStatus: FETCH_STATUS.IDLE,
  categoryBundleState: CATEGORY_BUNDLE_STATE.FETCH_CATEGORIES,
}

export { FETCH_STATUS, CATEGORY_BUNDLE_STATE, CATEGORY_ACTIONS, INITIAL_CATEGORY_BUNDLE_DATA };
