import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HorizontalLine from '../../components/HorizontalLine';

const Description = styled.section`
  margin-top: 2.438rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

const Text = styled.div`
  margin: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 25px;
  color: #3e4247;
`;

export default () =>
  (<Grid>
    <Description>
      <Row>
        <Col md={2}>
          <Title>Описание</Title>
        </Col>
        <Col md={10}>
          <Text>
            ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена
            на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.
            <br />
            <br />
            Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency
            Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс,
            фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе работает
            консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под
            хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с
            мягкими креслами для встреч с друзьями и соседями.
            <br />
            <br />
            Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
            торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные
            арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или
            фестиваль, поболеть за любимую команду и купить новую рубашку в торговом комплексе.
            <br />
            <br />
            Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый
            найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки
            на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где можно
            подышать свежим воздухом во время рабочего перерыва.
          </Text>
        </Col>
      </Row>
    </Description>
    <HorizontalLine />
  </Grid>);
