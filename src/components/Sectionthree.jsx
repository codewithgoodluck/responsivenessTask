import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Sectionthree = () => {
  return (
    <Container>
      <div>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Hero_Left_Section>
            <Col
              xs={12}
              md={4}
              style={{ backgroundColor: 'hsl(228, 45%, 44%)', color: 'white', }}
            >
              <p>
                Simplify how your team works today.
                <br />
                Get Started
              </p>
              <Button
                variant="secondary"
                style={{ borderRadius: '20px!important', border: 'none', marginBottom:"20px" }}
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
  background-color: 'hsl(228, 45%, 44%)';
  margin-top: '20px';
  color: 'color: hsl(228, 45%, 44%)';

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    padding-top:20px;
    margin-bottom: 30px;
  }

  button {
    margin-left: 150px;
    background-color: hsl(0, 0%, 5.88235294117647%) !important;
  }
`;
