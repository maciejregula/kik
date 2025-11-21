"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
// Zalecane: npm install react-icons
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

interface FooterProps {
  variant: "krawedzi" | "kola";
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const isKola = variant === "kola";

  // Definicja kolumn nawigacyjnych
  const KrawedziColumn = (
    <NavColumn>
      <Logo
        src="/images/logos/pracownia-krawedzi.svg"
        alt="Pracownia Krawędzi"
      />
      <NavList>
        <NavItem href="#serwis">SERWIS NARCIARSKI I SNOWBOARDOWY</NavItem>
        <NavItem href="#wypozyczalnia">WYPOŻYCZALNIA</NavItem>
        <NavItem href="#o-nas">O NAS</NavItem>
        <NavItem href="#kontakt">KONTAKT</NavItem>
      </NavList>
      <SocialIcons>
        <SocialLink href="#" target="_blank" aria-label="Facebook">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="#" target="_blank" aria-label="YouTube">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="#" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>
      </SocialIcons>
    </NavColumn>
  );

  const KolaColumn = (
    <NavColumn>
      <Logo src="/images/logos/pracownia-kola.svg" alt="Pracownia Koła" />
      <NavList>
        <NavItem href="#serwis-rowerowy">SERWIS ROWEROWY</NavItem>
        <NavItem href="#o-nas">O NAS</NavItem>
        <NavItem href="#kontakt">KONTAKT</NavItem>
      </NavList>
      <SocialIcons>
        <SocialLink href="#" target="_blank" aria-label="Facebook">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="#" target="_blank" aria-label="YouTube">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="#" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>
      </SocialIcons>
    </NavColumn>
  );

  return (
    <FooterContainer $variant={variant}>
      <ContentWrapper>
        <ColumnsWrapper>
          {/* Logika kolejności kolumn */}
          {isKola ? (
            <>
              {KolaColumn}
              {KrawedziColumn}
            </>
          ) : (
            <>
              {KrawedziColumn}
              {KolaColumn}
            </>
          )}
        </ColumnsWrapper>

        <SloganWrapper>
          <Slogan>
            Napędzamy Twoją pasję
            <br />– przez cały rok!
          </Slogan>
        </SloganWrapper>
      </ContentWrapper>
    </FooterContainer>
  );
};

// --- Styles ---

const FooterContainer = styled.footer<{ $variant: "krawedzi" | "kola" }>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 80px 24px;
  color: white;
  background-color: #0b0c10; /* Fallback color */
  background-image: ${({ $variant }) =>
    $variant === "krawedzi"
      ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/images/krawedzi-bg-1.jpg")'
      : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/images/kola-bg-1.jpg")'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 100px;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-bottom: 32px;
  /* Logotypy na ciemnym tle muszą być białe */
  filter: brightness(0) invert(1);
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  transition:
    transform 0.2s,
    opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1); /* Lekkie tło koła */
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SloganWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 900px) {
    justify-content: flex-end;
    flex: 1;
    padding-top: 60px; /* Opcjonalne wyrównanie w pionie do środka sekcji */
  }
`;

const Slogan = styled.p`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 400;
  color: white;
  margin: 0;
  max-width: 300px;
`;

export default Footer;
