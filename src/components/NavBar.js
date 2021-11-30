import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Entrega dos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Nosotros</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Categoria 4</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
}
export default NavBar;