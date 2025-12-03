import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  const footerBgStyle = {
    backgroundColor: '#0A1931', 
    color: '#E0E0E0', 
    paddingTop: '40px',
    paddingBottom: '20px',
    borderTop: '3px solid #FFD700', 
  };

  const socialIconStyle = {
    fontSize: '1.5rem',
    color: '#FFD700', 
    marginRight: '15px',
    transition: 'color 0.3s ease',
  };

  const handleMouseOver = (e) => { e.target.style.color = 'white'; };
  const handleMouseOut = (e) => { e.target.style.color = '#FFD700'; };

  return (
    <footer style={footerBgStyle}>
      <Container>
        <Row className="mb-4">
          
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-warning fw-bold mb-3 d-flex align-items-center">
              <i className="bi bi-person-workspace me-2"></i> Escritório S.A.
            </h5>
            <p style={{ fontSize: '0.9rem' }}>
              Buscando a justiça com excelência, inovação e o compromisso de proteger os interesses de nossos clientes.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i> Av. Brasil, 1234, São Paulo/SP
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white fw-bold mb-3">Links Rápidos</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light p-0 mb-2" style={{ fontSize: '0.9rem' }}>Início</Nav.Link>
              <Nav.Link href="#servicos" className="text-light p-0 mb-2" style={{ fontSize: '0.9rem' }}>Nossas Áreas</Nav.Link>
              <Nav.Link href="#historia" className="text-light p-0 mb-2" style={{ fontSize: '0.9rem' }}>Sobre Nós</Nav.Link>
              <Nav.Link href="#contato" className="text-light p-0 mb-2" style={{ fontSize: '0.9rem' }}>Fale Conosco</Nav.Link>
            </Nav>
          </Col>
          
          <Col lg={5} className="mb-4">
            <h5 className="text-white fw-bold mb-3">Conecte-se</h5>
            <div>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialIconStyle}
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialIconStyle}
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialIconStyle}
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
            <p className="mt-4 text-white-50" style={{ fontSize: '0.85rem' }}>
                <i className="bi bi-shield-lock-fill me-1"></i>
                <a href="#" className="text-white-50 text-decoration-none">Política de Privacidade</a>
            </p>
          </Col>
        </Row>
        
        <hr style={{ borderColor: '#404040' }} />

        <Row>
          <Col className="text-center mt-2">
            <p className="mb-0 text-white-50" style={{ fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} Escritório S.A. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;