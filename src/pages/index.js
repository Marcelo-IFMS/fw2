import 'bootstrap/dist/css/bootstrap.min.css'; //colocar na globals.css @import url('bootstrap/dist/css/bootstrap.min.css');
import { Container } from "react-bootstrap";
import Footer from './components/footer';
import NavBar from './components/navbar';



function Index() {
  return (
    <div>
      <NavBar />
      <Container className="conteudo">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci non beatae aperiam laudantium, quod omnis ad delectus id excepturi quos eius temporibus voluptate distinctio mollitia porro! Animi dicta dolor eius.</p>
        <p>Nobis sapiente beatae eos aliquid facere cupiditate officiis, minus, voluptatem at odit ea dignissimos! Voluptatem, tenetur nemo non consectetur et obcaecati! Quasi pariatur iure facere dolores, enim aliquid temporibus impedit!</p>
        <p>Laudantium similique deleniti saepe praesentium id commodi voluptates quam porro mollitia non, sequi eius dolore vel libero quis optio rem necessitatibus cupiditate repudiandae. Neque doloremque animi porro nobis, at consectetur.</p>
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