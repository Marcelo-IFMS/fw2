import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </Html>
  );
}

//https://nextjs.org/docs/pages/building-your-application/routing/custom-document
