/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Link } from "react-router-dom";

// UI Lib Components
import { Button, Form, FormControl, Navbar } from "react-bootstrap";

// Hooks & Context
import { useMovies } from "../../hooks";

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                              HEADER COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Header() {
/* ---------------------------------- HOOKS --------------------------------- */
    const { search, setSearch } = useMovies();

    const getSearchInput = (e) => {
        setSearch(e.target.value);
    };

/* -------------------------------- RENDERING ------------------------------- */
    return (        
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
                    <Link to="/" className="favorites flex items-center pos-r">
                        <i className="fas fa-heart"></i>
                        <span className="flex items-center justify-center">5</span>
                    </Link>
                </div>
            </div>
            {/*<SignUp/>*/}
        </Navbar>
    )
};

export default Header;