import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Sectiontwo = () => {
  return (
    <Container>
      <div>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Hero_Right_Section>
            <h1
              style={{
                textAlign: 'center',
                lineHeight: '40px',
                fontSize: '35px',
                color: ' hsl(228, 45%, 44%)',
                marginTop: '30px',
                marginBottom: '30px',
              }}
            >
              What they’ve said
            </h1>
            <Col xs={12} md={6}>
              <img src="Images/avatar-ali.png" alt="" />
            </Col>
          </Hero_Right_Section>
          <Hero_Left_Section>
            <Col xs={12} md={6}>
              <h1
                style={{
                  textAlign: 'center',
                  lineHeight: '40px',
                  fontSize: '35px',
                  color: ' hsl(228, 45%, 44%)',
                  marginTop: '30px',
                }}
              >
                Anisha Li
              </h1>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
              <Button
                variant="secondary"
                style={{ borderRadius: '20px!important', border: 'none' }}
                size="lg"
                active
              >
                Get Started
              </Button>

              <div></div>
            </Col>
          </Hero_Left_Section>
        </Row>
      </div>
    </Container>
  );
};

export default Sectiontwo;

const Hero_Right_Section = styled.div`
  h1 {
    @media (min-width: 768px) {
      margin-left: -200px;
    }
  }

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    color: '# hsl(228, 45%, 44%)';
  }

  img {
    width: 50%;
    margin-left: 100px;
    @media (min-width: 768px) {
      margin-left: 380px;
    }
  }
`;

const Hero_Left_Section = styled.div`
  margin-top: 20px;
  color: 'color: hsl(228, 45%, 44%)';

  @media (min-width: 768px) {
    margin-left: 200px;
  }

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  button {
    margin-left: 150px;
    margin-bottom: 50px;
    background-color: hsl(228, 45%, 44%) !important;
    @media (min-width: 768px) {
      margin-left: 250px;
    }
  }
`;
