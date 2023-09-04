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
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import MNavbar from '../components/mnavbar';
function ChangeColorOnClick(a) {
  if(a==1){
    document.querySelector(".track").id = 'track-inactive';
    document.querySelector(".track-prev").id = 'track-inactive';
    document.querySelector(".track-2").id = 'track-inactive';
    document.querySelector(".tracker-container1-h1").innerHTML = "01 Брифинг";
    document.querySelector(".tracker-container-middle-h1").innerHTML = "Слушаем ваши требования, уточняем условия, изучаем конкурентов, договариваемся о цене и сроках";
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
function hideForm() {
  document.querySelector('.main-page-form').id = 'form-hide';
}
function showForm() {
  document.querySelector('.main-page-form').id = 'form-show';
}
function showMessageAccept() {
  document.querySelector('.form-accepted').id = 'form-show';
}
function hideMessageAccept() {
  document.querySelector('.form-accepted').id = 'form-hide';
}
function Main() {
  const navigate = useNavigate();
  const navigatetoabout = () => {
    navigate('/about');
  }
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState("");
  const [description, setDescription] = useState("");
  const [socials, setSocials] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          orderType: orderType,
          description: description,
          socials: socials,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPhone("");
        setOrderType("");
        setDescription("");
        setSocials("");
        setMessage("Заявка успешно отправлена")
      } else {
        setMessage("Ошибка");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='main-page'>
      <div className='main-page-form'>
        <form className='form-container' onSubmit={handleSubmit} method="POST">
          <div className='form-header-container'>
            <div className='form-header'>
              <h1>Заявка</h1>
              
            </div>
            <div className="form-close-btn" onClick={hideForm}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
  <path d="M7.72357 0L0 7.72357L3.94395 11.6675L13.6943 21.5822L3.94395 31.3325L0 35.1121L7.72357 43L11.6675 39.056L21.5822 29.1414L31.3325 39.056L35.1121 43L43 35.1121L39.056 31.3325L29.1414 21.5822L39.056 11.6675L43 7.72357L35.1121 0L31.3325 3.94395L21.5822 13.6943L11.6675 3.94395L7.72357 0Z" fill="black" fill-opacity="0.5"/>
</svg>
            </div>
          </div>
          <div className='inputs-container'>
            <div className="vertical-inputs-1">
              <div className='vertical-input-1'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Имя'></input>
              </div>
              <div className='vertical-input-2'>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Телефон'></input>
              </div>
              <div className='vertical-input-3'>
              <select name="order-type" value={orderType} onChange={(e) => setOrderType(e.target.orderType)}>
                <option value="1">Выберите тип</option>
                <option value="1">Сайт-визитка</option>
                <option value="2">Лендинг</option>
                <option value="3">Веб-сайт</option>
                <option value="4">Другое</option>
              </select>
              </div>
            </div>
            <div className="vertical-inputs-2">
            <div className='vertical-input-6'>
                <textarea type="text" className='order-description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Пару слов о сайте 
'></textarea>
              </div>
            <div className='vertical-input-4'>
                <input type="text" value={socials} onChange={(e) => setSocials(e.target.value)} placeholder='Ссылка на соцсеть для связи'></input>
              </div>
            </div>
          </div>
          <button type='submit' className='form-submit-btn1' onClick={showMessageAccept}>Оформить</button>
            <div className='form-accepted'>
              <h1>Заявка успешно отправлена!</h1>
            </div>
        </form>
        
      </div>
      
      <Navbar></Navbar>
      <MNavbar></MNavbar>
      <div className='content-container'>
        <div className='content-container1'>
          <div className='content-header'>
            <h1>Создаем цифровые решения
для вашего бизнеса</h1>
          </div>
          <div className='content-description1'>
            <h1><span>Все типы сайтов:&nbsp;</span>от лендинга <br/> до интернет-магазина</h1>
          </div>
          <div className='content-description2'>
          <h1><span>Отслеживайте </span>состояние заказа с помощью трекинга</h1>
          </div>
          <div className='content-buttons-row'>
          <div className='content-button' id='want-site' onClick={showForm}>
          
            хочу сайт
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
          <div className='content-button' onClick={navigatetoabout}>
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
          breakpoints={{
              768: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              600: {
                spaceBetween: 10,
                slidesPerView: 1.5,
              },
              480: {
                spaceBetween: 10,
                slidesPerView: 1.5,
              },
              375: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              }
              
          }}
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
            <div className='mobile-swiper-container'>
            <Swiper
          slidesPerView={2.2}
          spaceBetween={40}
          breakpoints={{
            768: {
              spaceBetween: 30,
              slidesPerView: 2.2,
            },
            480: {
              spaceBetween: 30,
              slidesPerView: 1.3,
            },
            375: {
              spaceBetween: 30,
              slidesPerView: 1.2,
            },
            320: {
              spaceBetween: 30,
              slidesPerView: 1.2,
            }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mobile-clients"
      >
        <SwiperSlide><div className='mobile-position'><h1 className='mobile-position-header'>сайт-визитка</h1><h1 className='mobile-position-price'>от 5000 рублей</h1><h1 className='mobile-position-description'>Одностраничный сайт, демонстрирует Вас/ваши услуги</h1><h1 className='mobile-position-description'>Быстрый срок создания, не превышает 3 суток с момента брифинга</h1><div className='content-button' id='order-mobile' onClick={showForm}>
          
          выбрать
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='mobile-position'><h1 className='mobile-position-header'>лендинг</h1><h1 className='mobile-position-price'>от 7000 рублей</h1><h1 className='mobile-position-description'>Сайт из 1-2 страниц, демонстрирует Вас/ваши услуги</h1><h1 className='mobile-position-description'>Быстрый срок создания, не превышает 3 суток с момента брифинга</h1><div className='content-button' id='order-mobile' onClick={showForm}>
          
          выбрать
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='mobile-position'><h1 className='mobile-position-header'>вебсайт</h1><h1 className='mobile-position-price'>от 10000 рублей</h1><h1 className='mobile-position-description'>Сайт с серверной составляющей: интернет-площадка, магазин и пр.</h1><h1 className='mobile-position-description'>Средний срок создания - зависит от сложности проекта</h1><div className='content-button' id='order-mobile' onClick={showForm}>
          
          выбрать
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div></div></SwiperSlide>
      </Swiper>
            </div>
            <div className='pricelist-position'>
              <h1>сайт-визитка</h1>
              <h2>от 5000 рублей</h2>
              <h3>Одностраничный сайт, демонстрирует Вас/ваши услуги</h3>

              <h3>Быстрый срок создания, не превышает 3 суток с момента брифинга</h3>
<div className='content-button' id='order' onClick={showForm}>
          
            выбрать
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
            </div>
            <div className='pricelist-position'>
            <h1>лендинг</h1>
              <h2>от 7000 рублей</h2>
              <h3>Сайт из 1-2 страниц, демонстрирует Вас/ваши услуги</h3>

              <h3>Быстрый срок создания, не превышает 3 суток с момента брифинга</h3>
<div className='content-button' id='order' onClick={showForm}>
          
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
<div className='content-button' id='order' onClick={showForm}>
          
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
              <div className='point-1'>0</div>
              <div className='point-2' onClick={() => ChangeColorOnClick(1)}>1</div>
            </div>
            <div className='track' ><div className='point-inv'></div><div className='point-2' onClick={() => ChangeColorOnClick(2)} >2</div></div>
            <div className='track-prev' ><div className='point-inv'></div><div className='point-2' onClick={() => ChangeColorOnClick(3)}>3</div></div>
            <div className='track-2'><div className='point-inv'></div>
            <div className='point-2' onClick={() => ChangeColorOnClick(4)} >4</div>
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

export default Main