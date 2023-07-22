import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavbarBS className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#home">Hair Style Products</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="products">Products</Link>    
            <Link className="nav-link" to="cart">Cart</Link> 
            <Link className="nav-link" to="about">About us</Link> 
            <Link className="nav-link" to="team">Our Team</Link>            
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default NavBar;