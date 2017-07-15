import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HorizontalLine from '../../Components/HorizontalLine';

const Description = styled.section`margin-bottom: 1.5rem;`;

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

export default (props) => {
  if (props.text.length > 0) {
    return (
      <Grid>
        <Description>
          <Row>
            <Col md={2}>
              <Title>
                {props.title}
              </Title>
            </Col>
            <Col md={10}>
              <Text>
                {props.text}
              </Text>
            </Col>
          </Row>
        </Description>
        <HorizontalLine />
      </Grid>
    );
  }

  return <Description/>
};
