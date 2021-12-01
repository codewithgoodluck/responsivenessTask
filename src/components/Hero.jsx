import React from 'react';
import { Col, Row, Button,Carousel, Container} from 'react-bootstrap';
import styled from 'styled-components';

const Hero = () => {
  return (
      <Container>
        <div>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
      <Col xs={12} md={6}>
        <Hero_Right_Section>
          <Col xs={12} md={6}>
            <img src="Images/illustration-intro.svg" alt="" />
          </Col>
        </Hero_Right_Section>
    </Col>
    <Col xs={12} md={6}>
        <Hero_Left_Section>
          <Col xs={12} md={6}>
            <h1
              style={{
                textAlign: 'center',
                lineHeight: '40px',
                fontSize: '35px',
                color: ' hsl(228, 45%, 44%)',
              }}
            >
              Bring Everyone 
              Together to Build  Better Product
            </h1>
            <p>
              Manage makes it simple for softwarev teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button
              variant="secondary"
              style={{ borderRadius: '20px!important', border:"none", }}
              size="lg"
              active
            >
              Get Started
            </Button>

            <div>
           
          </div>
          </Col>
        </Hero_Left_Section>
        </Col>
      </Row>
    </div>



      </Container>
    
  );
};

export default Hero;

const Hero_Right_Section = styled.div`
  img {
    width: 100%;
    padding-left:5px;

    @media (max-width :425px) {
     width: 10%;
  }
  }
`;

const Hero_Left_Section = styled.div`
  margin-top: '20px';
  color: 'color: hsl(228, 45%, 44%)';

  p{
    font-size: 20px; 
    text-align: center; 
    margin-top:20px;
    margin-bottom:30px;
  }

  button{
      margin-left:150px;
      background-color:hsl(228, 45%, 44%) !important;
  }
`;
