import { useRouter } from "next/router"
import { Container } from "react-bootstrap"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

export default function Page() {
    const router = useRouter()
    return <>
        <NavBar />
        <Container className="conteudo">
            <p>Post: {router.query.id}</p>
        </Container>
        <Footer />
    </>

}