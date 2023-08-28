import React from 'react'
import './Footer.css';
import {Container, Row, Col} from 'reactstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
                    <img src= "https://www.dicota.com/media/logo/websites/1/footer_white_1.png" alt='logo' />
                </div>
                <p className='footer_text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque minima nesciunt provident veritatis magnam neque nisi, quisquam aliquid necessitatibus obcaecati qui maiores sed quibusdam doloremque ipsum dolore dolor cumque officiis?
                </p>
          </Col>

          <Col lg='3'></Col>

          <Col lg='2'></Col>

          <Col lg='3'></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer