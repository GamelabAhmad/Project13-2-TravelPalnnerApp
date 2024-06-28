import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InstagramSectionWrapper = styled.div`
  text-align: center;
  padding: 20px 0;
  position: relative;
  height: auto;
  background-color: #f9f9f9; /* Added background color for better visual separation */
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FollowMeText = styled.p`
  margin-top: 10px;
  margin-bottom: 40px; /* Added margin bottom for spacing */
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1); /* Makes the icons black */
  }
`;

const InstagramSection = () => {
  const redirectToInstagram = () => {
    window.location.href = 'https://www.instagram.com/visitindonesia/';
  };

  const images = [
    '/img/ig1.jpg',
    '/img/ig2.jpg',
    '/img/ig3.jpg',
    '/img/ig4.jpg',
    '/img/ig5.jpg',
    '/img/ig6.jpg',
    '/img/ig7.jpg',
    '/img/ig8.jpg',
  ];

  return (
    <InstagramSectionWrapper>
      <Container>
        <SectionTitle>Follow Me Instagram</SectionTitle>
        <FollowMeText onClick={redirectToInstagram}>@visitindonesia</FollowMeText>
        <StyledCarousel>
          {[0, 1, 2].map((pageIndex) => (
            <Carousel.Item key={pageIndex}>
              <Row>
                {images.slice(pageIndex * 4, pageIndex * 4 + 4).map((src, index) => (
                  <Col key={index} xs={12} md={6} lg={3}>
                    <ImageWrapper>
                      <Image src={src} alt={`Instagram ${index + 1}`} />
                    </ImageWrapper>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </StyledCarousel>
      </Container>
    </InstagramSectionWrapper>
  );
};

export default InstagramSection;
