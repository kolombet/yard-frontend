import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import gallery from './img/gallery/1/bitmap@2x.jpg';
import polyanka from './img/polyanka/polyanka-photo.jpg';
import map from './img/map.png';

class Complex extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="line-full"/>

        <section className="building-info">
          <div className="container">
            <div className="building">
              <div className="building-info-block">
                <h1 className="building-title">Жилой комплекс «Полянка/44»</h1>
                <p className="building-location">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
              </div>

              <button className="building-favorite-button">В избранное</button>
            </div>
          </div>
        </section>

        <div className="complex-gallery">
          <img src={gallery} alt="gallery" className="complex-gallery-item"/>
          <img src={gallery} alt="gallery" className="complex-gallery-item"/>
          <img src={gallery} alt="gallery" className="complex-gallery-item"/>
          <img src={gallery} alt="gallery" className="complex-gallery-item"/>
          <img src={gallery} alt="gallery" className="complex-gallery-item"/>

          <button className="gallery-button">41 фотография</button>
        </div>

        <section className="container">
          <div className="info-main">
            <div className="info-main-block">
              <h2 className="info-main-title">950<br/>
                <small className="info-main-description">предложений</small>
              </h2>
            </div>
            <div className="info-main-block">
              <h2 className="info-main-title">John McAslan + Partners<br/>
                <small className="info-main-description">архитектор</small>
              </h2>
            </div>
            <div className="info-main-block">
              <h2 className="info-main-title">Группа «ПСН»<br/>
                <small className="info-main-description">застройщик</small>
              </h2>
            </div>
          </div>

          <div className="line-short"/>
        </section>

        <section className="container">
          <h2 className="characteristics-title">Характеристики</h2>
          <div className="row">
            <div className="col-md-4">
              <dl className="characteristics-list">
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
                <dt className="characteristics-key">Статус:</dt>
                <dd className="characteristics-value">Квартиры</dd>
                <dt className="characteristics-key">Цены:</dt>
                <dd className="characteristics-value">от 5.3 до 143.5 млн</dd>
              </dl>
            </div>
            <div className="col-md-4">
              <dl className="characteristics-list">
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
              </dl>
            </div>
            <div className="col-md-4">
              <dl className="characteristics-list">
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
                <dt className="characteristics-key">Количество квартир:</dt>
                <dd className="characteristics-value">1 503</dd>
              </dl>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="description-wrapper">
            <div className="row">
              <div className="col-md-2">
                <h2 className="description-title">Описание</h2>
              </div>
              <div className="col-md-10">
                <p className="description-text">ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
                  Территория
                  разделена
                  на три зоны: жилой район,
                  центральный стадион «Динамо» и большой спортивный парк.
                  <br/><br/>
                  Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и
                  четыре
                  современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки,
                  магазины и
                  отделения банков. В каждом корпусе работает консьерж и круглосуточная охрана. Для жителей оборудованы
                  технические
                  помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с
                  мягкими
                  креслами
                  для встреч с друзьями и соседями.
                  <br/><br/>
                  Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей, торгово-развлекательный
                  комплекс,
                  подземная
                  парковка для гостей и две крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь
                  можно
                  сходить
                  на концерт или фестиваль, поболеть за любимую команду и купить новую рубашку в торговом комплексе.
                  <br/><br/>
                  Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый найдет
                  занятие: для
                  детей
                  оборудованы игровые зоны, для подростков — спортивные площадки на открытом воздухе, для взрослых —
                  велосипедные
                  дорожки и зоны отдыха, где можно подышать свежим воздухом во время рабочего перерыва.
                </p>
              </div>
            </div>
          </div>
          <div className="line-short"/>
        </section>

        <section className="container">
          <div className="infrastructure-wrapper">
            <div className="row">
              <div className="col-md-2">
                <h2 className="infrastructure-title">Инфраструктура</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"><p className="infrastructure-item">Бассейн</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Детский сад</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Частная школа</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Бассейн</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Детский сад</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Частная школа</p></div>
            </div>
            <div className="row">
              <div className="col-md-2"><p className="infrastructure-item">Частная школа</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Частная школа</p></div>
              <div className="col-md-2"><p className="infrastructure-item">Частная школа</p></div>
            </div>
          </div>
        </section>

        <section className="offer">
          <div className="container">
            <div className="row center-md">
              <h2 className="offer-main-title">Предложения в ЖК «Полянка/44»</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="offer-block">
                  <h3 className="offer-title">1-комнатные квартиры</h3>
                  <p className="offer-area">Площадь</p>
                  <p className="offer-area-value">от 59 до 120 м²</p>
                  <p className="offer-price">Стоимость</p>
                  <p className="offer-price-value">от 20.3 до 84.2 млн руб</p>
                  <div className="row center-md">
                    <button className="offer-button">Посмотреть предложения</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="offer-block">
                  <h3 className="offer-title">2-комнатные квартиры</h3>
                  <p className="offer-area">Площадь</p>
                  <p className="offer-area-value">от 59 до 120 м²</p>
                  <p className="offer-price">Стоимость</p>
                  <p className="offer-price-value">от 20.3 до 84.2 млн руб</p>
                  <div className="row center-md">
                    <button className="offer-button">Посмотреть предложения</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="offer-block">
                  <h3 className="offer-title">3-комнатные квартиры</h3>
                  <p className="offer-area">Площадь</p>
                  <p className="offer-area-value">от 59 до 120 м²</p>
                  <p className="offer-price">Стоимость</p>
                  <p className="offer-price-value">от 20.3 до 84.2 млн руб</p>
                  <div className="row center-md">
                    <button className="offer-button">Посмотреть предложения</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="guide">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="guide-info">
                  <h3 className="guide-summary">Якиманка</h3>
                  <h2 className="guide-title">Исторический центр Москвы в двух километрах от Кремля</h2>
                  <Link to="/" className="guide-link">Гид по Якиманке →</Link>
                </div>
              </div>
              <div className="col-md-6">
                <img className="guide-photo" src={polyanka} alt="yakimanka"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="guide-map" src={map} alt="yakimanka map"/>
              </div>
              <div className="col-md-6">
                <div className="guide-navigation">
                  <div className="guide-navigation-block">
                    <h3 className="guide-navigation-title">Красный Октябрь</h3>
                    <p className="guide-navigation-details">24 минуты, 6 км</p>
                  </div>
                  <div className="guide-navigation-block">
                    <h3 className="guide-navigation-title">World class</h3>
                    <p className="guide-navigation-details">2 минуты, 300 м</p>
                  </div>
                  <div className="guide-navigation-block">
                    <h3 className="guide-navigation-title">Третьяковская галерея</h3>
                    <p className="guide-navigation-details">14 минут, 4 км</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    );
  }
}

export default Complex;
