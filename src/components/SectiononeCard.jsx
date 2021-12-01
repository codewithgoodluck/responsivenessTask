import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

const SectiononeCard = ({ ...props }) => {
  return (
    <div>
      <Card style={{ border: 'none' }}>
        <Row
          style={{
            backgroundColor: 'hsl(228, 45%, 44%',
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            marginLeft: '20px',
            marginBottom: '20px',
          }}
        >
          <Col>
            <span
              style={{
                marginLeft: '20px',
                backgroundColor: 'white',
                borderRadius: '20px',
              }}
            >
              {props.num}
            </span>
          </Col>
          <Col>
            <p
              style={{ marginRight: '10px', marginTop: '10px', color: 'white' }}
            >
              {' '}
              {props.title}
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: 'center',
              marginBottom: '10px',
              paddingLeft: '40px',
              paddingRight: '50px',
            }}
          >
            {props.text}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SectiononeCard;
