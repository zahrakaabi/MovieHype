/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorkerRegistration";

// UI Local Components
import App from "./App";

/* -------------------------------------------------------------------------- */
/*                               INDEX COMPONENT                              */
/* -------------------------------------------------------------------------- */
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

serviceWorker.register();
