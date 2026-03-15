/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Link } from "react-router-dom";

// UI Lib Components
import { Button, Dropdown, Form, FormControl, Navbar } from "react-bootstrap";

// UI Local Components
import { Auth } from "../../Components";

// APIs & Context
import { supabase } from "../../api/supabaseClient";
import { useAuth, useBoolean, useFavorites, useSearch } from "../../hooks";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                              HEADER COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Header() {
/* ---------------------------------- HOOKS --------------------------------- */
    const { search, setSearch } = useSearch();
    const { favoritesCount } = useFavorites();
    const isSearchOpen = useBoolean();
    const viewLogin = useBoolean();
    const { user, loading, setUser, setSession } = useAuth();

/* --------------------------------- CONSTS --------------------------------- */
    const getSearchInput = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    if (loading) return;

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            setUser(null);
            setSession(null);
        } catch (err) {
            toast.error(err.message || "Something went wrong during logout.");
        };
    };

    const SearchPlaceholder = (
        <Form className="flex" title="Search movie">
            <FormControl type="text" placeholder="Search" value={search} onChange={getSearchInput} />
            {search ? (
                    <Button className="cursor-pointer" 
                    variant="outline-secondary" 
                    aria-label="Close search"
                    title="Close search"
                    onClick={() => {
                        isSearchOpen.onFalse();
                        setSearch('');
                    }}>
                        <i className="fas fa-xmark"></i>
                    </Button>
                ) : (
                    <Button className="cursor-pointer" 
                    variant="outline-secondary"
                    aria-label="Search"
                    title="Search">
                        <i className="fas fa-search"></i>
                    </Button>
                )
            }
        </Form>
    );

/* -------------------------------- RENDERING ------------------------------- */
    return (  
        <>     
        <Navbar className="navbar" expand="lg" fixed="top">
            <div className="wrapper flex justify-between items-center w-full">
                <Link to="/" className="logo" title="MovieHype">
                    MovieHype
                </Link>

                <div className="links flex flex-wrap items-center gap-4">
                    <div className="search-desktop">{SearchPlaceholder}</div>
                    {!!user && !!user.email_confirmed_at && (
                        <Link to="/admin"  
                        title="Admin Dashboard"
                        aria-label="Admin Dashboard">
                            Admin
                        </Link>
                    )}
                    <div className="search-mobile pos-r">
                        {!isSearchOpen.value ? ( 
                            <Button className="search-mobile__search cursor-pointer" 
                            variant="outline-secondary"
                            title="Search"
                            aria-label="Search"
                            onClick={isSearchOpen.onTrue}>
                                <i className="fas fa-search"></i>
                            </Button>
                        ) : ( 
                            <>
                                <div className="search-mobile__overlay w-full"
                                    onClick={isSearchOpen.onFalse}
                                />
                                <div className="search-mobile__dropdown wrapper w-full">
                                    {SearchPlaceholder}
                                </div>
                            </>
                        )}
                    </div>
                    <Link to="/favorites" 
                    className="favorites flex items-center pos-r" 
                    title="Favorites"
                    aria-label="Favorites">
                        <i className="fas fa-heart"></i>
                        <span className="flex items-center justify-center">{favoritesCount}</span>
                    </Link>
                    {!!user && !!user.email_confirmed_at ? (
                        <Dropdown className="isAuthenticated user-icon">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <i className="fa-solid fa-user-circle"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="flex items-center gap-2" 
                                title="Logout"
                                aria-label="Logout"
                                onClick={handleLogout}>
                                  <i className="fa-solid fa-right-from-bracket"></i>
                                  <span>Log out</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Button className="user-icon cursor-pointer" 
                        variant="outline-secondary"
                        title="Register/Login"
                        aria-label="Register/Login"
                        onClick={viewLogin.onTrue}>
                            <i className="fa-solid fa-user"></i>
                        </Button>
                    )}                    
                </div>
            </div>
        </Navbar>
        {viewLogin.value && <Auth open={viewLogin.value} onClose={viewLogin.onFalse} />}
        </> 
    )
};

export default Header;