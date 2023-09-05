import React from 'react'
import '../styles/product-details.css'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const ProductDetails = () => {

  const {id} = useParams()
  console.log(id) 
  const product = products.find(item=> item.id === id)

  const {imgUrl,  productName, price, avgRating, review, description, ProductDesc} = products;
  return (
    <Helmet>
      <CommonSection />
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
              <img src={imgUrl} alt="" />
              </Col>
              
              <Col lg='6'>
                <div className='product_details'>
                  <h2>{productName}</h2>
                  <div className= 'product_rating'>
                    <div>
                      <span><i class='ri-star-s-fill'></i></span>
                      <span><i class='ri-star-s-fill'></i></span>
                      <span><i class='ri-star-s-fill'></i></span>
                      <span><i class='ri-star-s-fill'></i></span>
                      <span><i class='ri-star-half-s-line'></i></span>

                    </div>

                    <p>({avgRating}ratings)</p>
                  </div>

                  <span>{price}</span>
                  <p>{ProductDesc}</p>

                  <button className="buy_btn">Add to Cart</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default ProductDetails;