import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;
  background-color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.3);
  }
`;

const Info = styled.article`
  padding-left: 2rem;
  padding-right: 5.375rem;
`;

const Underline = styled.div`
  border-bottom: solid 2px #646971;
  width:100%;
`;

const Location = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: Monaco, Menlo, Consolas, monospace;
  font-size: 16px;
  color: #646971;
  text-transform: uppercase;
  text-align: left;
`;

const Name = styled.h3`
  margin: 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  line-height: 1.4;
  color: #000000;
`;

const Description = styled.p`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  color: #3e4247;
`;

const Image = styled.img`
  width: 490px;
  height: 350px;
  object-fit: cover;
`;

export default function CardComponent(props) {
  return (
    <Card to={`/complexes/${props.id}`}>
      <Image src={props.image} alt="building preview" />
      <Underline>
        <Info>
          <Location>
            {props.location}
          </Location>
          <Name>
            {props.name}
          </Name>
          <Description>
            {props.description}
          </Description>
        </Info>
      </Underline>
    </Card>
  );
}

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
