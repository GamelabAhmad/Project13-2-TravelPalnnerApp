import React, { useState } from 'react';
import styled from 'styled-components';

const InstagramSectionWrapper = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  height: 50vh;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 25%;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FollowMeText = styled.p`
  margin-top: 10px;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const Arrow = styled.div`
  display: block;
  background: #ddd;
  color: black;
  font-size: 20px;
  line-height: 1;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  &:hover {
    background: #ccc;
  }
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

const InstagramSection = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const imageRefs = [];

  const scrollImages = (direction) => {
    if (direction === 'left' && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      imageRefs[scrollIndex - 1].scrollIntoView({ behavior: 'smooth' });
    } else if (direction === 'right' && scrollIndex < imageRefs.length - 1) {
      setScrollIndex(scrollIndex + 1);
      imageRefs[scrollIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToInstagram = () => {
    // Ganti URL dengan URL Instagram Anda
    window.location.href = 'https://www.instagram.com/visitindonesia/';
  };

  return (
    <InstagramSectionWrapper>
      <h2>Follow Me Instagram</h2>
      <FollowMeText onClick={redirectToInstagram}>@visitindonesia</FollowMeText>
      <PrevArrow onClick={() => scrollImages('left')}>{'<'}</PrevArrow>
      <ImagesContainer>
        {[
          '/img/ig1.jpg',
          '/img/ig2.jpg',
          '/img/ig3.jpg',
          '/img/ig4.jpg',
          '/img/ig5.jpg',
          '/img/ig6.jpg',
          '/img/ig7.jpg',
          '/img/ig8.jpg',
        ].map((src, index) => (
          <ImageWrapper key={index} ref={(el) => (imageRefs[index] = el)}>
            <Image src={src} alt={`Instagram ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImagesContainer>
      <NextArrow onClick={() => scrollImages('right')}>{'>'}</NextArrow>
    </InstagramSectionWrapper>
  );
};

export default InstagramSection;
