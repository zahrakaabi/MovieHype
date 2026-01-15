/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Route, Routes } from "react-router-dom";

// UI Local Components
import Layout from '../layout/layout';
import { Favorites, Home } from '../pages';

// Context
import { useAuth } from "../hooks";
import { AuthProvider, FavoritesProvider, MoviesProvider, SearchProvider } from "../context";

// Styles
import './App.scss';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
const App = () => {
/* ---------------------------------- HOOKS --------------------------------- */
  const { profile } = useAuth();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <SearchProvider>
      <MoviesProvider>
        <FavoritesProvider>
          <AuthProvider>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites /> } />
                {profile?.role==="admin" && <Route path="/admin" element={<h1>ADMIN PAGE TEST</h1>} />}
                {/* <Route path="/admin"><Admin movies={movies} searchInput={searchInput}/></Route> */}
              </Routes>
            </Layout>
          </AuthProvider>
        </FavoritesProvider>
      </MoviesProvider>
    </SearchProvider>
  );
}

export default App;