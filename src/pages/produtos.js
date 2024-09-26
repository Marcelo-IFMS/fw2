import { Container } from "react-bootstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Produtos() {
    return (
        <div>
            <NavBar />
            <Container className="conteudo">
                <h1>Produtos</h1>
            </Container>
            <Footer />
        </div>
    )

}