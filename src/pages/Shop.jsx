import React, {useState} from 'react'
import '../styles/shop.css'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/data/products'
import ProductsList from  "../components/UI/ProductsList"

const Shop = () => {

const [productsData, setProductsData] = useState(products)

const handleFilter = e=>{

  const filterValue = e.target.value;
  if(filterValue === "backpack"){
    const filteredProducts = products.filter((item) => item.Category === "backpack");

    setProductsData(filteredProducts)
  }

  if(filterValue === "sleeve"){
    const filteredProducts = products.filter((item) => item.Category === "sleeve");

    setProductsData(filteredProducts)
  }

  if(filterValue === "charger"){
    const filteredProducts = products.filter((item) => item.Category === "charger");

    setProductsData(filteredProducts)
  }

  if(filterValue === "silicone cable"){
    const filteredProducts = products.filter((item) => item.Category === "silicone cable");

    setProductsData(filteredProducts)
  }

  if(filterValue === "lightening cable"){
    const filteredProducts = products.filter((item) => item.Category === "lightening cable");

    setProductsData(filteredProducts)
  }

  if(filterValue === "mount"){
    const filteredProducts = products.filter((item) => item.Category === "mount");

    setProductsData(filteredProducts)
  }

  if(filterValue === "power bank"){
    const filteredProducts = products.filter((item) => item.Category === "power bank");

    setProductsData(filteredProducts)
  }

  if(filterValue === "pouch"){
    const filteredProducts = products.filter((item) => item.Category === "pouch");

    setProductsData(filteredProducts)
  }

  if(filterValue === "slim case"){
    const filteredProducts = products.filter((item) => item.Category === "slim case");

    setProductsData(filteredProducts)
  }

  if(filterValue === "trolley"){
    const filteredProducts = products.filter((item) => item.Category === "trolley");

    setProductsData(filteredProducts)
  }

  if(filterValue === "screen guard"){
    const filteredProducts = products.filter((item) => item.Category === "screen guard");

    setProductsData(filteredProducts)
  }

  if(filterValue === "connectivity"){
    const filteredProducts = products.filter((item) => item.Category === "connectivity");

    setProductsData(filteredProducts)
  }
};

const handleSearch = e=>{
  const searchTerm = e.target.value;

  const searchProducts = products.filter(item=> item.ProductName.toLowerCase().includes(searchTerm.toLowerCase()))

  setProductsData(searchProducts)
}

  return (
    <Helmet title='Shop'>

      <CommonSection title='Products' />


      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="backpack">Backpack</option>
                  <option value="trolley">Trolley</option>
                  <option value="slim Case">Slim Case</option>
                  <option value="lightening cable">Lightening Cable</option>
                  <option value="silicone cable">Silicone Cable</option>
                  <option value="power bank">Power Bank</option>
                  <option value="charger">Charger</option>
                  <option value="connectivity">Connectivity</option>
                  <option value="screen guard">Screen Guard</option>
                  <option value="mount">Mount</option>
                  <option value="pouch">Pouch</option>
                  <option value="sleeve">Sleeve</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter_widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                  
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search_box'>
                <input type="text" placeholder='Search......' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? (<h1 className='text-center fs-4'>No products are found</h1>) :
              (<ProductsList data={productsData} />)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop