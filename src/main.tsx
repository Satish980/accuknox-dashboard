import { createRoot } from "react-dom/client";
import { Provider } from "redux-bundler-react";

import App from "./App.tsx";
import createStore from "./bundles";
import "./index.css";

const store = createStore();
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
