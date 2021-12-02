import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Sectionthree = () => {
  return (
    <Container fluid>
      <div>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
        <Col
              xs={12}
              md={6}
              style={{ backgroundColor: 'hsl(228, 45%, 44%)', color: 'white', }}
            >
          <Hero_Left_Section>
        
              <p>
                Simplify how your team works today.
               
                Get Started
              </p>
           
              <div></div>
        
          </Hero_Left_Section>
          </Col>

          <Col
              xs={12}
              md={6}
              style={{ backgroundColor: 'hsl(228, 45%, 44%)', color: 'white', }}
            >
          <Hero_Left_Section>
              <Button
                variant="secondary"
                style={{ borderRadius: '20px!important', border: 'none', marginBottom:"20px" }}
                size="lg"
                active
              >
                Get Started
              </Button>

              <div></div>
        
          </Hero_Left_Section>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Sectionthree;

const Hero_Right_Section = styled.div`
  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    color: '# hsl(0, 0%, 1.9607843137254901%)';

  }

  img {
    width: 50%;
    margin-left: 100px;
  }
`;

const Hero_Left_Section = styled.div`
 
  margin-top: '100px';
  color: 'color: hsl(228, 45%, 44%)';

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    padding-top:20px;
    margin-bottom: 30px;
    
    @media (min-width :768px) {
      margin-left: -400px;
    
  }
  }

  button {
    margin-left: 150px;
    background-color: hsl(0, 0%, 5.88235294117647%) !important;

    @media (min-width :768px) {
      margin-left: 700px;
      margin-top:50px;
      background-color: blue!important;
  }
    
  }
`;
