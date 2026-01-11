/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Link } from "react-router-dom";

// UI Lib Components
import { Button, Form, FormControl, Navbar } from "react-bootstrap";

// UI Local Components
import { Auth } from "../../Components";

// Hooks & Context
import { useBoolean, useFavorites, useSearch } from "../../hooks";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                              HEADER COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Header() {
/* ---------------------------------- HOOKS --------------------------------- */
    const { search, setSearch } = useSearch();
    const { favoritesCount } = useFavorites();
    const viewLogin = useBoolean();

    const getSearchInput = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

/* -------------------------------- RENDERING ------------------------------- */
    return (  
        <>     
        <Navbar className="navbar" expand="lg" fixed="top">
            <div className="wrapper flex justify-between items-center w-full">
                <Link to="/" className="logo">
                    MovieHype
                </Link>

                <div className="links flex flex-wrap items-center gap-4">
                    <Form className="flex">
                        <FormControl type="text" placeholder="Search" value={search} onChange={getSearchInput} />
                        <Button className="cursor-pointer" variant="outline-secondary">
                            <i className="fas fa-search"></i>
                        </Button>
                    </Form>
                    <Link to="/favorites" className="favorites flex items-center pos-r">
                        <i className="fas fa-heart"></i>
                        <span className="flex items-center justify-center">{favoritesCount}</span>
                    </Link>
                    <Button className="user cursor-pointer" 
                    variant="outline-secondary"
                    onClick={viewLogin.onTrue}>
                        <i className="fas fa-user"></i>
                    </Button>
                </div>
            </div>
        </Navbar>
        {viewLogin.value && <Auth open={viewLogin.value} onClose={viewLogin.onFalse} />}
        </> 
    )
};

export default Header;