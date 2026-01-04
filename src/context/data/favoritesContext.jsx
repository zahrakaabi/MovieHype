/* -------------------------------------------------------------------------- */
/*                                DEPENDECNIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useEffect, useReducer } from "react";

/* -------------------------------------------------------------------------- */
/*                           CREATE FAVORITES CONTEXT                         */
/* -------------------------------------------------------------------------- */
export const FavoritesContext = createContext(null);

/* -------------------------------------------------------------------------- */
/*                              FAVORITES REDUCER                             */
/* -------------------------------------------------------------------------- */
const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
};

function FavoritesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload
        }
      }

    case ACTIONS.REMOVE:
      const newItems = { ...state.items }
      delete newItems[action.payload]
      return { ...state, items: newItems }

    default:
      return state
  }
};
// Explanation
// here's the state structure
// state = {
//   items: {
//     movie.id: movie,
//     ex- 45: { id: 45, title: "Interstellar" }
//   }
//   @TO DO : U can add loading/error...
// }


/* -------------------------------------------------------------------------- */
/*                             FAVORITES PROVIDER                             */
/* -------------------------------------------------------------------------- */
function FavoritesProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [state, dispatch] = useReducer(
    FavoritesReducer,
    { items: {} },
    () => {
      const stored = localStorage.getItem("favorites")
      return stored ? JSON.parse(stored) : { items: {} }
    }
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state))
  }, [state]);

/* --------------------------------- CONSTS --------------------------------- */
  const value = {
    favorites: state.items,
    addFavorite: (movie) => dispatch({ type: ACTIONS.ADD, payload: movie }),
    removeFavorite: (id) => dispatch({ type: ACTIONS.REMOVE, payload: id }),
    isFavorite: (id) => Boolean(state.items[id]),
    favoritesCount: Object.keys(state.items).length,
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
};

export default FavoritesProvider;