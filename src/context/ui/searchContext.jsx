/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useMemo, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                            CREATE SEARCH CONTEXT                           */
/* -------------------------------------------------------------------------- */
export const SearchContext = createContext({
    search: "",
    setSearch: () => {}
});

/* -------------------------------------------------------------------------- */
/*                               SEARCH PROVIDER                              */
/* -------------------------------------------------------------------------- */
function SearchProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
    const [search, setSearch] = useState("");

/* --------------------------------- MEMOIZE --------------------------------- */
    const value = useMemo(
        () => ({ search, setSearch }),
        [search]
    );

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
};

export default SearchProvider;