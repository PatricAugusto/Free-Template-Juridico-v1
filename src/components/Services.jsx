import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const servicesData = [
  {
    icon: 'bi-bank2',
    title: 'Direito Empresarial e Societário',
    description: 'Assessoria completa em contratos, fusões, aquisições e estruturação de startups, garantindo a solidez do seu negócio.',
  },
  {
    icon: 'bi-person-badge',
    title: 'Direito do Trabalho',
    description: 'Defesa e orientação tanto para empresas quanto para colaboradores em questões de litígios, compliance e relações sindicais.',
  },
  {
    icon: 'bi-house-door',
    title: 'Direito Imobiliário',
    description: 'Transações de compra e venda, locações, regularização de propriedades e disputas de condomínio com segurança jurídica.',
  },
  {
    icon: 'bi-laptop',
    title: 'Direito Digital e Proteção de Dados (LGPD)',
    description: 'Consultoria para adequação à LGPD, proteção de propriedade intelectual digital e questões de crimes cibernéticos.',
  },
  {
    icon: 'bi-calculator',
    title: 'Direito Tributário',
    description: 'Planejamento tributário eficiente e contencioso administrativo e judicial para otimizar a carga fiscal da sua empresa.',
  },
  {
    icon: 'bi-heart-half',
    title: 'Direito de Família e Sucessões',
    description: 'Atuação sensível em divórcios, inventários, testamentos e guarda de menores, buscando soluções consensuais.',
  },
];

function Services() {
  return (
    <section id="servicos" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-warning fw-bold text-uppercase mb-1">NOSSAS ESPECIALIDADES</p>
          <h2 className="display-4 fw-bold text-dark">Áreas de Atuação Estratégica</h2>
          <p className="lead text-muted mt-3">
            O conhecimento aprofundado em diversas áreas do Direito garante soluções completas e multidisciplinares.
          </p>
        </div>

        <Row className="g-4"> 
          {servicesData.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="h-100 shadow-sm border-0 transition-hover">
                <Card.Body className="p-4 text-center">
                  {/* Ícone */}
                  <div className="mb-4">
                    <i 
                      className={`bi ${service.icon}`} 
                      style={{ fontSize: '3rem', color: '#0A1931' }} 
                    />
                  </div>
                  
                  <Card.Title className="fw-bold mb-3" style={{ color: '#0A1931' }}>
                    {service.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;