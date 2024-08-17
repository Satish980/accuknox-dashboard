import { Category } from "../types";

export const initialDashboardData: Category[] = [
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
