import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";

import i18next from "./service/i18next";
import './service/i18next'
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();

// i18next
// light mode and dark mode
// axios 
// redux