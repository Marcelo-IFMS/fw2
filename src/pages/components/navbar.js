import { Container, Nav, Navbar } from 'react-bootstrap';
//https://www.youtube.com/watch?v=B0vZGTGgIdc
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
                        <Nav.Link href="/users">Usuários</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}
