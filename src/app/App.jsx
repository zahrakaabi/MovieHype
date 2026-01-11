/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Route, Routes } from "react-router-dom";

// UI Local Components
import Layout from '../layout/layout';
import { Favorites, Home } from '../pages';

// Context
import { FavoritesProvider, MoviesProvider, SearchProvider } from "../context";

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
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites /> } />
              {/* <Route path="/admin"><Admin movies={movies} searchInput={searchInput}/></Route> */}
            </Routes>
          </Layout>
        </FavoritesProvider>
      </MoviesProvider>
    </SearchProvider>
  );
}

export default App;