import React from "react";
import styled from 'styled-components';
const Gallery = styled.section`
  position: relative;
`;
const Images = styled.div`
    overflow-x: auto;
    display: flex;
`;
const Image = styled.img`
    height: 400px;
`;
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

export default () =>
  <Gallery>
    <Images>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/1.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/2.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/3.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/4.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/5.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/1.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/2.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/3.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/4.jpg'} alt="gallery"/>
      <Image src={process.env.PUBLIC_URL + '/gallery/complex/5.jpg'} alt="gallery"/>
    </Images>
    <Expand>41 фотография</Expand>
  </Gallery>;
