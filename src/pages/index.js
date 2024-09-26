import 'bootstrap/dist/css/bootstrap.min.css'; //colocar na globals.css @import url('bootstrap/dist/css/bootstrap.min.css');
import { Container } from "react-bootstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";



function Index() {
  return (
    <div>
      <NavBar />
      <Container className="conteudo">

      </Container>
      <Footer />
    </div>
  )
}
export default Index;

/* f1 


html.format.contentUnformatted 

"emmet.triggerExpansionOnTab": true,
    "files.associations": {
        "*html": "html"
    },
    "emmet.useInlineCompletions": true

    https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
    */