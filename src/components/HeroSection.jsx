import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeroBackground from '../assets/Hero-img.jpg';

function HeroSection() {
  const heroStyle = {
    minHeight: '90vh', 
    display: 'flex',
    alignItems: 'center', 
    textAlign: 'center', 
    color: '#FFFFFF',
    backgroundImage: `url(${HeroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    paddingTop: '5rem', 
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 25, 49, 0.85)', 
    zIndex: 1,
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle} />
      
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-3 fw-bolder mb-4 text-warning animate-fade-in delay-1 hero-h1">
              Excelência Legal em um Mundo em Evolução
            </h1>
            
            <p className="lead mb-5 text-light opacity-75 animate-fade-in delay-2" style={{ fontSize: '1.4rem' }}>
              Nosso escritório combina a **tradição** da advocacia com a **inovação** tecnológica, 
              garantindo soluções jurídicas modernas e eficazes para seus desafios mais complexos.
            </p>
            
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center animate-fade-in delay-3">
              <Button 
                variant="warning" 
                size="lg" 
                href="#contato"
                className="px-5 py-3 fw-bold shadow-lg hero-cta-button"
              >
                <i className="bi bi-calendar-check me-2"></i> 
                Agende Sua Consulta
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                href="#servicos"
                className="px-5 py-3 fw-bold hero-cta-button"
              >
                <i className="bi bi-shield-check me-2"></i>
                Nossas Áreas de Atuação
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;