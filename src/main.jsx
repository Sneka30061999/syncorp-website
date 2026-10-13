import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter basename="/syncorp-website">
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);
