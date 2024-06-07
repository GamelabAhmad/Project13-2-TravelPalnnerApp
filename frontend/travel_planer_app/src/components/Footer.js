import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #87CEEB;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 10px;
`;

const FooterImage = styled.img`
  width: 250px; /* Sesuaikan ukuran gambar */
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 0.9em;
  margin: 5px 0;
`;

const FooterList = styled.ul`
  font-size: 0.9em;
  margin: 5px 0;
  list-style-type: none; /* Menghilangkan bullet points */
  padding: 0; /* Menghilangkan padding default dari ul */
`;

const FooterListItem = styled.li`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: black; /* Warna teks link */
  text-decoration: none; /* Menghilangkan garis bawah pada link */
  &:hover {
    text-decoration: underline; /* Menggarisbawahi teks saat hover */
  }
`;

const FooterTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterImage src="/img/Logo-Travel.png" alt="Visit Indonesia" />
          <FooterText>Copyright &copy; 2024 Caption Project Travel Planner App</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Information</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="https://www.instagram.com">Instagram</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="mailto:info@travelplanner.com">Email</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://wa.me/1234567890">WhatsApp</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#home">Home</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#paket-trip">Paket Trip</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#destinasi">Destinasi</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.instagram.com">Instagram</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="https://www.facebook.com">Facebook</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.twitter.com">Twitter</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.instagram.com">Instagram</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
