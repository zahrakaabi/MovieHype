/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages

// UI Lib Components
import { Container, Nav, Navbar } from "react-bootstrap";

/* -------------------------------------------------------------------------- */
/*                              HEADER COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Header() {
/* -------------------------------- RENDERING ------------------------------- */
    return (        
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/*<Form inline>
                    <FormControl type="text" placeholder="SEARCH" onChange={getSearchInput}/>
                    <Button variant="outline-secondary"><i class="fas fa-search  "></i></Button>
                </Form>*/}
                {/*<Link className="heart" to="/Favorite">
                        <i class="fas fa-heart"></i>
                        <span className="favorite--value">{favorite}</span>
                    </Link>
                <SignUp/>*/}
                <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/films" className="linked--page">Films</Nav.Link>
                        <Nav.Link href="/series" className="linked--page">Series</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;