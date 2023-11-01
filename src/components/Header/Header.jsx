import React,{useRef, useEffect} from 'react'
import './Header.css'
import {FaHeart, FaShoppingCart,} from 'react-icons/fa';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import {  useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';

import { Container, Row } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase config';
import { toast } from 'react-toastify';

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
        const totalQuantity = useSelector(state=> state.cart.totalQuantity)
        const profileActionRef = useRef(null)
        const menuRef = useRef(null)
        const navigate = useNavigate(null)
        const {currentUser} = useAuth(null)

        const stickyHeaderFunc = () => {
            window.addEventListener('scroll', ()=>{
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                    headerRef.current.classList.add('sticky_header')
                } else{
                    headerRef.current.classList.remove('sticky_header')
                }
            });
        };

        const logout = ()=> {
            signOut(auth).then(()=> {
                toast.success('Logged out')
            }).catch(err=> {
                toast.error(err.message)
            })
        }
    

useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
});

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  
    const navigateToCart =()=> {
            navigate("/cart");
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_profileActions')
  
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
                    
                    <span className='cart_icon' onClick={navigateToCart}><FaShoppingCart  />
                    <span className='badge'>{totalQuantity}</span>
                    </span>
                    <div className='profile'>
                    < motion.img 
                    whileTap={{scale:1.2}} src={currentUser ? currentUser.photoURL : userIcon} alt=''
                    onClick={toggleProfileActions}
                    />

                    <div className='profile_actions' ref={profileActionRef} onClick={toggleProfileActions}>
                        {
                            currentUser ? <span onClick={logout}>Logout</span> : 
                            <div>
                                 <Link to='/signup'>Signup</Link>
                                 <Link to='/login'>Login</Link>
                            
                             </div>
                        }
                    </div>
                    </div>
                    

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