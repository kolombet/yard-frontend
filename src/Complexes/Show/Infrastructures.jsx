import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Infrastructure from './Infrastructure';

const Infrastructures = styled.section`margin-bottom: 3.5rem;`;

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

const Empty = styled.div``;

export default (props) => {
  if (props.infrastructures && props.infrastructures.length > 0) {
    return (
      <Grid>
        <Infrastructures>
          <Row>
            <Col md={2}>
              <Title>Инфраструктура</Title>
            </Col>
          </Row>
          <Row>
            {props.infrastructures.map(infrastructure =>
              <Infrastructure key={infrastructure.id} name={infrastructure.name} />,
            )}
          </Row>
        </Infrastructures>
      </Grid>
    );
  }

  return <Empty />;
};
