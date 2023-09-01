import React,{useRef, useEffect} from 'react'
import './Header.css'
import {FaHeart, FaShoppingCart, FaUser} from 'react-icons/fa';
import { motion } from 'framer-motion';


import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const nav_links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
]

const Header = () => {

    

        const headerRef = useRef(null);

        const menuRef = useRef(null)

        const stickyHeaderFunc = () => {
            window.addEventListener('scroll', ()=>{
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                    headerRef.current.classList.add('sticky_header')
                } else{
                    headerRef.current.classList.remove('sticky_header')
                }
            });
        };
    

useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
});

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  return <header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <img src= "https://www.dicota.com/media/logo/websites/1/footer_white_1.png" alt='logo' />
                </div>

                <div className='navigation' ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>
                        {nav_links.map((item, index) =>(
                            <li className='nav_item' key={index}>
                                <NavLink to={item.path} className={(navClass)=>
                                navClass.isActive? 'nav_active' : '' } >{item.display}</NavLink> 
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='nav_icons'>
                    <span className='fav_icon'><FaHeart />
                    <span className='badge'>1</span>
                    </span>
                    
                    <span className='cart_icon'><FaShoppingCart  />
                    <span className='badge'>1</span>
                    </span>
                    <motion.span whileTap={{scale:1.2}} className='cart_icon'  ><FaUser  /></motion.span>

                    <div className='mobile_menu'>
                        <span onClick={menuToggle}>
                            <i class='ri-menu-line'></i>
                        </span>

                    </div>
                </div>
            </div>
        </Row>
    </Container>

  </header>
}

export default Header;