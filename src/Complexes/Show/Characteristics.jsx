import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.125rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

const List = styled.dl`
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: max-content auto;
`;

const Key = styled.dt`
  grid-column-start: 1;
  margin-bottom: 0.6875rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #a9afb6;
`;

const Value = styled.dd`
  margin-left: 2rem;
  grid-column-start: 2;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: #3e4247;
`;

export default function CharacteristicsComponent(props) {
  return (
    <Grid>
      <Title>Характеристики</Title>
      <Row>
        <Col md={4}>
          <List>
            <Key>Количество квартир:</Key>
            <Value>
              {props.propertiesCount}
            </Value>
            <Key>Цены:</Key>
            <Value>
              от {props.price.min} до {props.price.max} млн
            </Value>
            <Key>Площадь:</Key>
            <Value>
              От {props.area.min} до {props.area.max} м²
            </Value>
          </List>
        </Col>
        <Col md={4}>
          <List>
            <Key>Конструкция корпусов:</Key>
            <Value>
              {props.constructionType}
            </Value>
            <Key>Высота потолков:</Key>
            <Value>
              От {props.ceilHeight.min} до {props.ceilHeight.max} м
            </Value>
            <Key>Обслуживание:</Key>
            <Value>
              {props.maintenanceCosts} руб / м² / месяц
            </Value>
          </List>
        </Col>
        <Col md={4}>
          <List>
            <Key>Безопасность:</Key>
            <Value>
              {props.security}
            </Value>
          </List>
        </Col>
      </Row>
    </Grid>
  );
}

CharacteristicsComponent.propTypes = {
  propertiesCount: PropTypes.number.isRequired,
  price: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  security: PropTypes.string.isRequired,
  constructionType: PropTypes.string.isRequired,
  area: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  ceilHeight: PropTypes.shape({
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
  }).isRequired,
  maintenanceCosts: PropTypes.number.isRequired,
};
