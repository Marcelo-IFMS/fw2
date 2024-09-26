
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//https://www.youtube.com/watch?v=B0vZGTGgIdc Router: https://www.youtube.com/watch?v=0wJCxEDDetE https://www.youtube.com/watch?v=t4Zax3c2TuI
export default function NavBar() {
    return (
    <Container>
        <Navbar expand="lg" className="rounded navbar bg-dark navbar-dark px-3 gradient-custom">
            <Navbar.Brand href="/">6V</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/produtos">Produtos</Nav.Link>
                    <Nav.Link href="/sobre">Sobre</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    );
}
