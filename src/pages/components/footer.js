import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <Container className="bottom fixed-button">
        <footer className="px-3">
            <ul className="nav justify-content-center border-bottom pb-1 mb-2">
                <li className="nav-item">Disciplina de FrameWorks2</li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2024 IFMS</p>
        </footer>
        </Container>
    );
}