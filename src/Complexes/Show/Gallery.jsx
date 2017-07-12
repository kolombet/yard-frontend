import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gallery = styled.section`position: relative;`;

const Images = styled.div`
  overflow-x: auto;
  display: flex;
`;

const Image = styled.img`height: 400px;`;

const Expand = styled.button`
  position: absolute;
  top: 358px;
  left: 128px;
  bottom: 16px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  background-color: #00779a;

  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  color: white;
`;

export default function GalleryComponent(props) {
  const image = props.images[0].id;
  return (
    <Gallery>
      <Images>
        <Image src={image} alt="gallery" />
      </Images>
      <Expand>41 фотография</Expand>
    </Gallery>
  );
}

GalleryComponent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      isPublic: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
