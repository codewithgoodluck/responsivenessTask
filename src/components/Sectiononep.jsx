import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import SectiononeCard from './SectiononeCard';
import Data from '../data/Data.json';

const Sectiononep = () => {
  return (
    <Container>
      <div>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Hero_Left_Section>
            <Col xs={12} md={4}>
              <h1
                style={{
                  textAlign: 'center',
                  lineHeight: '45px',
                  marginTop: '40px',
                  fontSize: '35px',
                  color: ' hsl(228, 45%, 44%)',
                }}
              >
                What’s different about Manage?
              </h1>
              <p>
                Manage provides all the functionality your <br />
                team needs, without the complexity. <br />
                Our software is tailor-made for modern digital product teams.
              </p>

              <div></div>
            </Col>
          </Hero_Left_Section>
          {Data.map(video => (
            <SectiononeCard key={video.key} {...video} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Sectiononep;

const Hero_Right_Section = styled.div`
  img {
    width: 100%;
    padding-left: 5px;
  }
`;

const Hero_Left_Section = styled.div`
  margin-top: '40px';
  color: 'color: hsl(228, 45%, 44%)';

  p {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  button {
    margin-left: 180px;
    background-color: hsl(228, 45%, 44%) !important;
  }
`;
