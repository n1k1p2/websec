import React from 'react';
import './mnavbar.css';
import logo from '../imgs/007a0d4c02ffc8a4cb764baae3851e43.png';
import vk from '../imgs/VK.png';
import tg from '../imgs/TG.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
function MNavbar() {
    const navigate = useNavigate();
    const navigatetoMain = () => {
        navigate('/home');
    }
    const navigatetoAbout =  () => {
        navigate('/about');
    }
    return (
        <div className='mobile-navbar-container'>
            <img className='logo-mobile' src={logo}></img>
            <img className='logo-mobile' id='vk-mobile' src={vk}></img>
            <img className='tg-mobile' src={tg}></img>
            <input id="burger" type="checkbox" />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav>    
                <ul>
                    <li><a onClick={navigatetoMain}>Главная</a></li>
                    <li><a onClick={navigatetoAbout}>О нас</a></li>
                    <li><a href="#">Трекинг</a></li>
                </ul>  
                </nav>
        </div>
    )
}
export default MNavbar