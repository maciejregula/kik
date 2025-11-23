import { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import PreferenceLink from "@/app/Core/PreferenceLink";

interface MenuProps {
  variant: "krawedzi" | "kola";
}

const menu: React.FC<MenuProps> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Definicja linków dla obu wariantów
  const links =
    variant === "krawedzi"
      ? [
          { href: "#serwis", label: "Serwis narciarski i snowboardowy" },
          { href: "#wypozyczalnia", label: "Wypożyczalnia" },
          { href: "#o-nas", label: "O nas" },
          { href: "#kontakt", label: "Kontakt" },
        ]
      : [
          { href: "#serwis", label: "Serwis rowerowy" },
          { href: "#pakiety", label: "Pakiety serwisowe" },
          { href: "#o-nas", label: "O nas" },
          { href: "#kontakt", label: "Kontakt" },
        ];

  const switchTarget = variant === "krawedzi" ? "/kola" : "/krawedzi";
  const switchLabel =
    variant === "krawedzi" ? "Pracownia koła" : "Pracownia krawędzi";

  return (
    <Header $variant={variant}>
      {/* Mobile Toggle - pierwszy w DOM, aby na mobile był po lewej */}
      <MobileToggle onClick={toggleMenu}>
        <MdMenu size={32} color="white" />
      </MobileToggle>

      <LogoContainer>
        <Brand
          src={
            variant === "krawedzi"
              ? "/images/logos/pracownia-krawedzi.svg"
              : "/images/logos/pracownia-kola.svg"
          }
          alt={variant === "krawedzi" ? "Pracownia Krawędzi" : "Pracownia Koła"}
        />
      </LogoContainer>

      {/* Desktop Navigation - widoczna tylko powyżej 941px */}
      <DesktopNav>
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <SwitchLink to={switchTarget}>{switchLabel}</SwitchLink>
      </DesktopNav>

      {/* Mobile Navigation - widoczna tylko poniżej 941px */}
      <MobileNav $isOpen={isOpen} $variant={variant}>
        <CloseButton onClick={closeMenu}>
          <MdClose size={32} color="white" />
        </CloseButton>
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
        <div onClick={closeMenu}>
          <SwitchLink to={switchTarget}>{switchLabel}</SwitchLink>
        </div>
      </MobileNav>
    </Header>
  );
};

// Helper do kolorów
const getBgColor = (variant: "krawedzi" | "kola") =>
  variant === "krawedzi" ? "#1d2d74" : "#52ab6b";

const Header = styled.header<{ $variant: "krawedzi" | "kola" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 40px;
  background: ${({ $variant }) => getBgColor($variant)};
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 941px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 101;
`;

const Brand = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 102;
  padding: 0;

  @media (max-width: 941px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

// Wspólny styl dla linków
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

// Kontener dla menu Desktopowego
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 941px) {
    display: none;
  }
`;

const SwitchLink = styled(PreferenceLink)`
  && {
    background: transparent;
    padding: 0;
    display: inline;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: white;
      opacity: 1;
    }

    @media (max-width: 941px) {
      font-size: 16px;
      margin-top: 20px;
      display: block;
    }
  }
`;

const MobileNav = styled.nav<{
  $isOpen: boolean;
  $variant: "krawedzi" | "kola";
}>`
  display: none;

  @media (max-width: 941px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh; /* Fallback */
    height: 100dvh; /* Nowoczesne rozwiązanie dla mobilnych pasków przeglądarki */
    background: ${({ $variant }) => getBgColor($variant)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    z-index: 101;

    /* Dodajemy obsługę przewijania */
    overflow-y: auto;

    /* Animacja wjazdu */
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;

    /* --- POPRAWKA DLA LANDSCAPE (ORIENTACJA POZIOMA) --- */
    @media (orientation: landscape) {
      justify-content: flex-start; /* Zamiast centrowania, zacznij od góry */
      padding-top: 80px; /* Miejsce na przycisk X */
      padding-bottom: 40px; /* Miejsce na dole */
      gap: 20px; /* Mniejszy odstęp między linkami */
    }
  }

  ${NavLink} {
    font-size: 24px;

    /* Zmniejsz czcionkę w trybie landscape, żeby więcej się zmieściło */
    @media (orientation: landscape) {
      font-size: 18px;
    }
  }

  /* Dostosowanie linku przełączającego w landscape */
  ${SwitchLink} {
    @media (orientation: landscape) {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

export default menu;
