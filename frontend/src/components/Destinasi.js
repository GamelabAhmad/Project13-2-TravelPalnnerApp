import React from 'react';
import styled from 'styled-components'; // Tambahkan ini
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DestinasiSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: left;
  height: 70vh;

  @media (max-width: 768px) {
    padding: 40px 10px;
    height: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Card = styled.a`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 calc(25% - 20px); /* Adjusted for 4 cards with margin */
  margin: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; /* Maintain a fixed height */
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 200px;
    flex: 0 0 calc(50% - 20px); /* 2 cards per row on smaller screens */
    margin: 0 5px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media (max-width: 768px) {
    object-fit: contain; /* Ensure image is fully visible */
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: white;
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
`;

const destinasiData = [
  { id: 1, title: 'Bali', image: 'img/destinasi-bali.jpeg', link: '/bali' },
  { id: 2, title: 'Yogyakarta', image: 'img/destinasi-jogja.jpeg', link: '/yogyakarta' },
  { id: 3, title: 'Jawa Tengah', image: 'img/destinasi-jawatengah.jpeg', link: '/jateng' },
  { id: 4, title: 'Jawa Timur', image: 'img/destinasi-jawatimur.jpeg', link: '/jatim' },
  { id: 5, title: 'Sumatera', image: 'img/destinasi-sumatera.jpeg', link: '/sumatera' },
  { id: 6, title: 'Nusa Tenggara Timur', image: 'img/destinasi-ntt.jpeg', link: '/ntt' },
  { id: 7, title: 'Papua', image: 'img/destinasi-ntb.jpeg', link: '/papua' },
];

// Custom arrow components
const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #000;
  }

  &.slick-prev {
    left: -25px;
  }

  &.slick-next {
    right: -25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;

    &.slick-prev {
      left: -15px;
    }

    &.slick-next {
      right: -15px;
    }
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ArrowButton className="slick-next">{'>'}</ArrowButton>,
  prevArrow: <ArrowButton className="slick-prev">{'<'}</ArrowButton>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Destinasi = () => {
  return (
    <DestinasiSection>
      <Container>
        <SectionTitle>Destinasi</SectionTitle>
        <Slider {...settings}>
          {destinasiData.map((destinasi) => (
            <Card key={destinasi.id} href={destinasi.link}>
              <CardImage src={destinasi.image} alt={destinasi.title} />
              <CardContent>
                <CardTitle>{destinasi.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </DestinasiSection>
  );
};

export default Destinasi;
