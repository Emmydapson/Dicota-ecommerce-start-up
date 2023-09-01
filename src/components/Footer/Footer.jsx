import React from 'react'
import './Footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-6'>
          <div className='logo'>
            <div>
              <h1 className='text-white'>Dicota</h1>
            </div>
                </div>
                <p className='footer_text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque minima nesciunt provident veritatis magnam neque nisi, quisquam aliquid necessitatibus obcaecati qui maiores sed quibusdam doloremque ipsum dolore dolor cumque officiis?
                </p>
          </Col>

          <Col lg='3' md= '3' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className='quick_links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Sleeves</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Backpack</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Charger</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md= '3' className='mb-4'>
          <div className="footer_quick-links">
              <h4 className='quick_links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
          <div className="footer_quick-links">
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>543 Okota, isolo, Lagos</p>
                </ListGroupItem>

                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>08012345678</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                <p>dicota@gmail.com</p>
                </ListGroupItem>

                
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className='footer_copyright'>Copyright {year} developed by Tecres Interns. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer