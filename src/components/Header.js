import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/**
 * Header
 * Componente funcional que representa el header de la aplicacion
 * Se debe ver en todas las vistas
 * @returns
 */

export default function Header() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/#">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/Manga">Manga</Nav.Link>
        <Nav.Link href="/Anime">Anime</Nav.Link>
        <Nav.Link href="/Videojuegos">Videojuegos</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )

}