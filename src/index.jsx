/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import * as serviceWorker from "../public/serviceWorkerRegistration";

// UI Local Components
import App from "./app/App";

/* -------------------------------------------------------------------------- */
/*                               INDEX COMPONENT                              */
/* -------------------------------------------------------------------------- */
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </BrowserRouter>
);

serviceWorker.register();
