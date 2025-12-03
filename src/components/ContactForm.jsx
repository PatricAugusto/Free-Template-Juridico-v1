import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactForm() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  const infoItemStyle = {
    backgroundColor: '#0A1931', 
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  return (
    <section id="contato" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="text-warning fw-bold text-uppercase mb-1">FALE CONOSCO</p>
          <h2 className="display-4 fw-bold text-dark">Agende Sua Consulta Legal</h2>
          <p className="lead text-muted mt-3">
            Estamos prontos para ouvir sua questão e oferecer o suporte jurídico que você precisa.
          </p>
        </div>

        <Row className="justify-content-center">

           <Col lg={7} className="order-lg-2">
            <div className="p-4 border rounded shadow-lg bg-white mb-4 mb-lg-0">
              <h4 className="fw-bold mb-4 text-dark">Envie Sua Mensagem</h4>
              
              <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Seu Nome Completo</Form.Label>
                  <Form.Control type="text" placeholder="Insira seu nome" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Seu Melhor Email</Form.Label>
                  <Form.Control type="email" placeholder="nome@exemplo.com" required />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Dúvida Trabalhista" required />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Detalhes da Sua Questão</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Descreva brevemente sua necessidade jurídica..." 
                    required 
                  />
                </Form.Group>

                <Button 
                  variant="warning" 
                  type="submit" 
                  size="lg"
                  className="w-100 fw-bold py-2"
                >
                  <i className="bi bi-send-fill me-2"></i> 
                  Solicitar Contato
                </Button>
              </Form>
            </div>
          </Col>
          
          <Col lg={4} className="order-lg-1 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4 text-dark">Informações Diretas</h4>
            
            <div style={infoItemStyle}>
              <i className="bi bi-envelope-fill me-3" style={{ color: '#FFD700', fontSize: '1.5rem' }}></i>
              <h5 className="mb-1 text-warning">Email</h5>
              <p className="mb-0">contato@escritorioadv.com</p>
            </div>

            <div style={infoItemStyle}>
              <i className="bi bi-telephone-fill me-3" style={{ color: '#FFD700', fontSize: '1.5rem' }}></i>
              <h5 className="mb-1 text-warning">Telefone</h5>
              <p className="mb-0">(11) 98765-4321</p>
            </div>

            <div style={infoItemStyle}>
              <i className="bi bi-geo-alt-fill me-3" style={{ color: '#FFD700', fontSize: '1.5rem' }}></i>
              <h5 className="mb-1 text-warning">Localização</h5>
              <p className="mb-0">Av. Brasil, 1234 - 15º Andar, São Paulo/SP</p>
            </div>
            
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;