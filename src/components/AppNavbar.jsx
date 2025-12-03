import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function AppNavbar() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top"
      className="shadow-sm" 
      style={{ 
        backgroundColor: '#0A1931', 
        borderBottom: '3px solid #FFD700' 
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="text-white fw-bold d-flex align-items-center"
          style={{ fontSize: '1.5rem', letterSpacing: '1px' }}
        >
          <i className="bi bi-person-workspace me-2 text-warning"></i> 
          <span>Escritório S.A. | Advocacia</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#servicos" className="mx-2 text-light hover-effect">
              Serviços
            </Nav.Link>
            <Nav.Link href="#historia" className="mx-2 text-light hover-effect">
              História
            </Nav.Link>
            <Nav.Link href="#contato" className="mx-2 text-light hover-effect">
              Contato
            </Nav.Link>
            
            <Button 
              variant="outline-warning" 
              className="ms-lg-3 px-4 fw-bold"
              href="#contato"
              style={{ 
                transition: 'all 0.3s ease',
                borderColor: '#FFD700',
              }}
            >
              <i className="bi bi-chat-dots-fill me-2"></i> 
              Consulta Rápida
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;