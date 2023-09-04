import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import Navbar from '../components/navbar';
import './aboutus.css';
import MNavbar from '../components/mnavbar';
function Aboutus() {
      return (
            <div className='aboutus-page'>
                <Navbar></Navbar>
                <MNavbar></MNavbar>
                <div className='aboutus-container'>
                    <div className="aboutus-1">
                        <div className='aboutus-1-header'>
                            <h1>МЫ - WEBSEC</h1>
                        </div>
                        <div className='aboutus-1-middle'>
                            <div className='aboutus-1-middle-1'>
                                <h1>Молодая команда по разработке сайтов. Наш продукт для старта, развития и продвижения вашего бизнеса.</h1>
                            </div>
                            <div className='aboutus-1-middle-2'>
                                <h1>В наших сайтах:</h1>
                                <h1>-современный дизайн</h1>
                                <h1>-отзывчивый интерфейс</h1>
                                <h1>-надёжная серверная составляющая</h1>
                            </div>
                            <div className='aboutus-1-middle-3'>
                                <h1>При завершении работы над сайтом, наше сотрудничество с клиентом не заканчивается, по его требованию мы адаптируем сайт под новые условия, внесем правки.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-2">
                    </div>
                </div>
            </div>
        )
}
export default Aboutus