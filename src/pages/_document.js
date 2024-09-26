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
    </Html>
  );
}

//https://nextjs.org/docs/pages/building-your-application/routing/custom-document
