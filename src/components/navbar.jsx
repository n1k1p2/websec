import React from 'react';
import './navbar.css';
import logo from '../imgs/007a0d4c02ffc8a4cb764baae3851e43.png';
import vk from '../imgs/VK.png';
import tg from '../imgs/TG.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const navigatetoMain = () => {
        navigate('/home');
    }
  return (
    <div className='navbar-container' id='navbar'>
        <div className='navbar-containers'>
            <div className='navbar-container-logo'>
                <img src={logo} id='logo' className='navbar-logo'></img>
                <img src={vk} className='navbar-sm1'></img>
                <img src={tg} className='navbar-sm2'></img>
            </div>
            <div className='navbar-container-btns'>

            <Link
    activeClass="active"
    to="content-container"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
>
                <div className='btn-1' onClick={navigatetoMain}><h1>Главная</h1></div></Link>
                <Link
    activeClass="active"
    to="clients-container"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
>
                <div className='btn-1'><h1>Портфолио</h1></div></Link>
                <Link
    activeClass="active"
    to="pricelist-container"
    spy={true}
    smooth={true}
    offset={-50}
    duration={500}
>
                <div className='btn-1'><h1>Прайслист</h1></div></Link>
                <Link
    activeClass="active"
    to="tracker-content"
    spy={true}
    smooth={true}
    offset={-50}
    duration={500}
>
                <div className='btn-1'><h1>Трекинг</h1></div></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar