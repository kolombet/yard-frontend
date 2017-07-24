// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { formatMillion } from '../../util';
import media from '../../media';
import {
  constructionKinds,
  securityKinds,
  furnitureKinds,
  conditions,
  renovateKinds,
  quarters,
} from '../dictionary';

import type { Complex as ComplexType } from '../types';

const Title = styled.h2`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.125rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
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

const Characteristics = styled.section`
  margin-bottom: 1rem;

  ${media.sm`
    margin-bottom: 3rem;
  `};
`;

const Wrapper = styled.div`
  overflow-x: scroll;

  ${media.sm`
    overflow-x: initial;
  `};
`;

const WrapperInner = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 76rem;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};
`;

type Props = {
  complex: ComplexType,
};

export default ({ complex }: Props = {}) => {
  const { statistics = {}, details = {}, propertyDefaults = {} } = complex;
  const { propertiesCount = '', price, totalArea } = statistics;
  const {
    security,
    constructionKind = 'brick',
    ceilHeight,
    maintenanceCosts,
    startYear,
    startQuarter,
    commissioningYear,
    commissioningQuarter,
  } = details;
  const { information } = propertyDefaults;
  const { furniture, condition, renovate } = information;

  return (
    <Characteristics>
      <Grid>
        <Title>Характеристики</Title>
        <Wrapper>
          <WrapperInner>
            <Row>
              <Col xs={4}>
                <List>
                  <Key>Количество квартир:</Key>
                  <Value>
                    {propertiesCount}
                  </Value>
                  <Key>Цены:</Key>
                  {price.from.rub === price.to.rub
                    ? <Value>
                      {formatMillion(price.to.rub)} млн
                      </Value>
                    : <Value>
                        От {formatMillion(price.from.rub)} до {formatMillion(price.to.rub)} млн
                      </Value>}

                  <Key>Площадь:</Key>
                  <Value>
                    От {Math.round(totalArea.from)} до {Math.round(totalArea.to)} м²
                  </Value>
                  <Key>Ремонт:</Key>
                  <Value>
                    {renovateKinds[renovate]}
                  </Value>
                </List>
              </Col>
              <Col xs={4}>
                <List>
                  <Key>Конструкция корпусов:</Key>
                  <Value>
                    {constructionKinds[constructionKind]}
                  </Value>
                  <Key>Высота потолков:</Key>
                  <Value>
                    От {+ceilHeight.from.toFixed(2)} до {+ceilHeight.to.toFixed(2)} м
                  </Value>
                  <Key>Обслуживание:</Key>
                  <Value>
                    {maintenanceCosts} руб / м² / месяц
                  </Value>
                  <Key>Мебель:</Key>
                  <Value>
                    {furnitureKinds[furniture] || ''}
                  </Value>
                </List>
              </Col>
              <Col xs={4}>
                <List>
                  <Key>Безопасность:</Key>
                  <Value>
                    {securityKinds[security] || ''}
                  </Value>
                  <Key>Состояние:</Key>
                  <Value>
                    {conditions[condition] || ''}
                  </Value>
                  <Key>Начало строительства</Key>
                  <Value>
                    {quarters[startQuarter]} квартал {startYear} года
                  </Value>

                  <Key>Конец строительства</Key>
                  <Value>
                    {quarters[commissioningQuarter]} квартал {commissioningYear} года
                  </Value>
                </List>
              </Col>
            </Row>
          </WrapperInner>
        </Wrapper>
      </Grid>
    </Characteristics>
  );
};
