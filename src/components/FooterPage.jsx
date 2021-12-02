import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { FormControl, Button, InputGroup, Container } from 'react-bootstrap';
import styled from 'styled-components';
const FooterPage = () => {
  return (
    <Container fluid>
      <Footerparent>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">
                  <>
                    <InputGroup
                      style={{
                        width: '80%',
                        height: '20%',
                        marginLeft: '50px',
                      }}
                      className="mb-3"
                    >
                      <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                      />

                      <Button
                        variant="secondary"
                        style={{
                          borderRadius: '20px!important',
                          border: 'none',
                          marginLeft: '10px',
                        }}
                        size="lg"
                        active
                      >
                        Get Started
                      </Button>
                    </InputGroup>
                  </>
                </h5>
              </MDBCol>
              <MDBCol md="6">
                <div
                  className="footer_innaer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Home</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">About Us</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Community</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Pricing</a>
                    </li>
                  </ul>

                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Careers</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Privacy Policy</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Registration</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Blog</a>
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Container fluid>
           
          </Container>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href="https://www.mdbootstrap.com"> Elite Technology </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Footerparent>
    </Container>
  );
};

export default FooterPage;

const Footerparent = styled.div`
  .Footerparent {
    background-color: 'black' !important;
  }

  .footer_innaer {
    ul {
      background-color: 'black' !important;
      @media (min-width: 768px) {
        display: flex;
        align-items:"center";
        justify-content:"center";
        padding-top:15px;
      }
      li {
        @media (min-width: 768px) {
          margin-left: 20px;
        }
      }
    }
  }

  span {
    margin-left: 50px;
  }

  .btn-group-lg > .btn,
  .btn-lg {
    @media (min-width: 768px) {
      margin-top: 5px;
      border: none;
      background-color: hsl(228, 45%, 44%) !important;
    }
  }
`;
