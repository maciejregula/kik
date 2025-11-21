"use client";

import React from "react";
import styled from "styled-components";

interface MapComponentProps {
  variant: "kola" | "krawedzi";
}

const MapComponent: React.FC<MapComponentProps> = ({ variant }) => {
  const isKola = variant === "kola";

  // Określamy folder, z którego pobieramy ikonki (zgodnie z Twoim opisem)
  const iconFolder = isKola ? "kola" : "krawedzi";

  const phoneIcon = `/images/${iconFolder}/phone.jpg`;
  const mailIcon = `/images/${iconFolder}/mail.jpg`;
  const mapIcon = `/images/${iconFolder}/map.jpg`;

  // Ścieżki do logotypów JPG
  const logoKola = "/images/logos/pracownia-kola.jpg";
  const logoKrawedzi = "/images/logos/pracownia-krawedzi.jpg";

  return (
    <Section id="kontakt">
      <Container>
        <InfoColumn>
          <LogosRow>
            {isKola ? (
              <>
                <Logo src={logoKola} alt="Pracownia Koła" />
                <Logo src={logoKrawedzi} alt="Pracownia Krawędzi" />
              </>
            ) : (
              <>
                <Logo src={logoKrawedzi} alt="Pracownia Krawędzi" />
                <Logo src={logoKola} alt="Pracownia Koła" />
              </>
            )}
          </LogosRow>

          <ContactGrid>
            {/* Telefon */}
            <IconWrapper>
              <Icon src={phoneIcon} alt="Telefon" />
            </IconWrapper>
            <TextWrapper>
              <ContactLink href="tel:+48502303569">
                502 303 569 (Wojtek)
              </ContactLink>
              <ContactLink href="tel:+48517636398">
                517 636 398 (Marek)
              </ContactLink>
            </TextWrapper>

            {/* Email */}
            <IconWrapper>
              <Icon src={mailIcon} alt="Email" />
            </IconWrapper>
            <TextWrapper>
              <ContactLink href="mailto:pracowniakik@gmail.com">
                pracowniakik@gmail.com
              </ContactLink>
            </TextWrapper>

            {/* Adres */}
            <IconWrapper>
              <Icon src={mapIcon} alt="Adres" />
            </IconWrapper>
            <TextWrapper>
              <ContactText>Ul. Granitowa 11, Pszczyna 43-200</ContactText>
            </TextWrapper>
          </ContactGrid>

          <OpeningHours>
            <strong>Otwarte:</strong>
            <strong>Poniedziałek - Piątek 09:00 - 19:00</strong>
          </OpeningHours>
        </InfoColumn>

        <MapColumn>
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.616878465488!2d18.93871697689548!3d49.97125601835268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a07731202125%3A0x49d7a9d7c7202549!2sGranitowa%2011%2C%2043-200%20Pszczyna!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl&t=h"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapColumn>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 60px 24px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

const LogosRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;
`;

const Logo = styled.img`
  height: 57px;
  width: auto;
  object-fit: contain;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  column-gap: 24px;
  row-gap: 32px;
  margin-bottom: 40px;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #10101a;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  margin: 0;
  font-size: 18px;
  color: #10101a;
  line-height: 1.5;
  text-decoration: none;
  transition: opacity 0.2s;
  display: block;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const OpeningHours = styled.div`
  font-size: 18px;
  color: #000;
  line-height: 1.5;

  strong {
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
  }
`;

const MapColumn = styled.div`
  flex: 1;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #eee;

  @media (max-width: 899px) {
    width: 100%;
    height: 300px;
  }
`;

const MapFrame = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export default MapComponent;
