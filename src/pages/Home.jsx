
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import bg1 from '../assets/images/BACKGROUND BG.webp';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import { useEffect, useState } from "react";
import counterimg from '../assets/images/phone-03.png'
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([])
  const [wiredProducts, setWiredProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  
  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter((item) => item.Category === 'backpack');
    
    const filteredBestSalesProducts = products.filter((item) => item.Category === 'charger');

    const filteredMobileProducts = products.filter((item) => item.Category === 'silicone cable');

    const filteredWiredProducts = products.filter((item) => item.Category === 'lightening cable');

    const filteredPopularProducts = products.filter((item) => item.Category === 'sleeve');

    
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWiredProducts(filteredWiredProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (<Helmet title={"Home"}>
    <section className='bg1_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='bg1_content'>
                <p className='bg1_subtitle'>Trending product in{year}</p>
                <h2>Get All Your Latest Gadgets And Accessories</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit beatae doloribus nobis esse magni. Nisi corporis voluptatibus voluptate, reiciendis sequi laudantium unde, veritatis ea explicabo dignissimos ducimus cumque, est tenetur.</p>

                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>


            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='bg1'>
              <img src={bg1} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best_sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer_count">
      <Container>
        <Row>
          <Col lg='6' md='12' className="count_down-col">
          <div className="Clock_top-content">
            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
            <h3 className="text-white fs-5 mb-3">i-phone 13 red color</h3>
          </div>
          <Clock/>

          <motion.button whileTap={{scale: 1.2}} className="buy_btn store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          
          <Col lg='6' md='12' className="text-end counter_img">
            <img src={counterimg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arrivals">
      <Container>
      <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section_title'>New arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts}/>
          <ProductsList data={wiredProducts}/>
        </Row>
      </Container>
    </section>

    <section className="popular_category mb-5">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Popular in category</h2>
          </Col>
          <ProductsList data={popularProducts}/>
          <ProductsList data={popularProducts}/>
        </Row>
      </Container>
    </section>

  </Helmet>
  );
}

export default Home