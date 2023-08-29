import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import "./main.css";
import backgr from '../imgs/Vectary texture.png';
import Navbar from '../components/navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import rect from '../imgs/Rectangle 1.png'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import {ColorChange} from 'color-change'
function ChangeColorOnClick(a) {
  if(a==1){
    document.querySelector(".track").id = 'track-inactive';
    document.querySelector(".track-prev").id = 'track-inactive';
    document.querySelector(".track-2").id = 'track-inactive';
    document.querySelector(".tracker-container1-h1").innerHTML = "01 Брифинг";
  }
  if(a==2)
  {
    document.querySelector(".track").id = 'track-active';
    document.querySelector(".track-prev").id = 'track-inactive';
    document.querySelector(".track-2").id = 'track-inactive';
    document.querySelector(".tracker-container1-h1").innerHTML = "02 Макет";
    document.querySelector(".tracker-container-middle-h1").innerHTML = "Создаем макет сайта, он даст вам представление о финальном продукте. После вашего согласия переходим к разработке сайта.";

  }
  if(a==3){
    document.querySelector(".track").id = 'track-active';
    document.querySelector(".track-prev").id = 'track-active';
    document.querySelector(".track-2").id = 'track-inactive';
    document.querySelector(".tracker-container1-h1").innerHTML = "03 Разработка";
    document.querySelector(".tracker-container-middle-h1").innerHTML = "Разрабатываем фронт и бекэнд сайта, готовый дизайн, серверная составляющая. Рабочий вариант сайта. В трекере отображается на каком этапе разработка сайта.";

  }
  if(a==4)
  {
    document.querySelector(".track-2").id = 'track-active';
    document.querySelector(".track").id = 'track-active';
    document.querySelector(".track-prev").id = 'track-active';
    document.querySelector(".tracker-container1-h1").innerHTML = "04 Финал";
    document.querySelector(".tracker-container-middle-h1").innerHTML = "Размещаем проект на хостинг, покупаем доменное имя и продолжаем менеджмент вашего проекта";
  }
  
}

class Main extends React.Component {

  render() {
  return (
    <div className='main-page'>
      
      <Navbar></Navbar>
      <div className='content-container'>
        <div className='content-container1'>
          <div className='content-header'>
            <h1>Создаем цифровые решения
для вашего бизнеса</h1>
          </div>
          <div className='content-description1'>
            <h1><span>Все типы сайтов:&nbsp;</span>от лендинга</h1><h1>до интернет-магазина</h1>
          </div>
          <div className='content-description2'>
          <h1><span>Отслеживайте </span>состояние заказа с помощью трекинга</h1>
          </div>
          <div className='content-buttons-row'>
          <div className='content-button' >
          
            хочу сайт
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
          <div className='content-button'>
            о нас<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
        </div>
        </div>
        <div className='content-container2'>
          <img src={backgr}></img>
        </div>
      </div>
      <div className='clients-container'>
        <div className='clients-header'>
          <div className='clietns-header-h1'>
            <h1>Наши клиенты</h1>
          </div>
            <div className='swiper-scrllbar'></div><div className='scrllbar-trace'></div>
          </div>
          <Swiper
          slidesPerView={3}
          spaceBetween={67}
        scrollbar={{
          hide: false,
          draggable: true,
          el: '.swiper-scrllbar',
          enabled: true,
          
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
        <SwiperSlide><img src={rect}/></SwiperSlide>
      </Swiper>
        </div>
        <div className='pricelist-container'>
          <div className='pricelist-header'>
            <h1 className='h1-header'>Наши услуги<span> - выберите желаемый сайт</span></h1>
          </div>
          <div className='pricelist-positions'>
            <div className='pricelist-position'>
              <h1>сайт-визитка</h1>
              <h2>от 5000 рублей</h2>
              <h3>Одностраничный сайт, демонстрирует Вас/ваши услуги</h3>

              <h3>Быстрый срок создания, не превышает 3 суток с момента брифинга</h3>
<div className='content-button' id='order'>
          
            выбрать
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
            </div>
            <div className='pricelist-position'>
            <h1>лендинг</h1>
              <h2>от 7000 рублей</h2>
              <h3>Сайт из 1-2 страниц, демонстрирует Вас/ваши услуги</h3>

              <h3>Быстрый срок создания, не превышает 3 суток с момента брифинга</h3>
<div className='content-button' id='order'>
          
            выбрать
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
            </div>
            <div className='pricelist-position'>
            <h1>веб-сайт</h1>
              <h2>от 10000 рублей</h2>
              <h3>Сайт с серверной составляющей: интернет-площадка, магазин и пр.</h3>
<h3>Средний срок создания - зависит от сложности проекта
</h3>
<div className='content-button' id='order'>
          
            выбрать
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
            </div>
          </div>
        </div>
        <div className='tracker-content'>
          <div className='tracker-header'>
            <h1>Трекинг <span>- следите за разработкой</span></h1>
          </div>
          <div className='tracker-trace'>
            <div className='track-1' >
              <div className='point-1'></div>
              <div className='point-2' onClick={() => ChangeColorOnClick(1)}></div>
            </div>
            <div className='track' ><div className='point-2' onClick={() => ChangeColorOnClick(2)} ></div></div>
            <div className='track-prev' ><div className='point-2' onClick={() => ChangeColorOnClick(3)}></div></div>
            <div className='track-2'> 
            <div className='point-2' onClick={() => ChangeColorOnClick(4)} ></div>
              </div>
          </div>
          <div className='tracker-containers'>
            <div className='tracker-container1'>
              <div className='tracker-container1-header'>
                <h1 className='tracker-container1-h1'>01 Брифинг</h1>
              </div>
              <div className="tracker-container1-middle">
                <h1 className='tracker-container-middle-h1'>Слушаем ваши требования,
уточняем условия, изучаем конкурентов,
договариваемся о цене и сроках</h1>
              </div>
            </div>
            <div className='tracker-container2'>

            </div>
            <div className='tracker-container1' id='tracker-container1-sec'>
              <div className='tracker-container1-header'>
                <h1 className='tracker-container1-h1'>4 ЭТАПА</h1>
              </div>
              <div className="tracker-container1-middle">
                <h1 className='tracker-container-middle-h1'>Контролируйте разработку, консультируйте нас, вносите правки, ведь мы активно обновляем данные на странице вашего заказа</h1>
              </div>
            </div>
            
          </div>
        </div>
        <div className='footer'>
          <h1>Уже заказали сайт?</h1>
          <div className='tracker-button' >
            отследить
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
        </div>
      </div>
    
  )
  
}
}

export default Main