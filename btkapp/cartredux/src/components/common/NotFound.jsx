import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Col className="text-center">
            <h2 className="text-danger blinking">SAYFA BULUNAMADI</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
