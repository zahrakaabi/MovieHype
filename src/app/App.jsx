/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// UI Local Components
import Layout from '../layout/layout';
import { Admin, Favorites, Home } from '../routes/lazyRoutes';

// Context & Hooks & Utils
import { AuthProvider, FavoritesProvider, MoviesProvider, SearchProvider } from "../context";
import { RequireRole } from "../Components/auth/RequireRole";

// Styles
import './App.scss';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
const App = () => {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <SearchProvider>
      <MoviesProvider>
        <FavoritesProvider>
          <AuthProvider>
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites /> } />
                  <Route path="/admin" element={
                      <RequireRole allowedRoles={["admin"]}>
                        <Admin />
                      </RequireRole>
                    }
                  />
                </Routes>
              </Suspense>
            </Layout>
          </AuthProvider>
        </FavoritesProvider>
      </MoviesProvider>
    </SearchProvider>
  );
};

export default App;