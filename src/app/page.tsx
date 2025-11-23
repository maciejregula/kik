"use client";

import styled from "styled-components";
import PreferenceLink from "./Core/PreferenceLink";

const HomeSplit: React.FC = () => {
  return (
    <>
      <Header>Pracownia krawędzi i koła</Header>
      <Split>
        <Panel to="/krawedzi" $type="krawedzi">
          <Logo
            src="/images/logos/pracownia-krawedzi.svg"
            alt="Pracownia Krawędzi"
          />
        </Panel>

        <Panel to="/kola" $type="kola">
          <Logo src="/images/logos/pracownia-kola.svg" alt="Pracownia Koła" />
        </Panel>
      </Split>
    </>
  );
};

const Split = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Stylujemy PreferenceLink jak panel (to wciąż <a>, ale z logiką ustawiania ciastka)
const Panel = styled(PreferenceLink)<{ $type: "krawedzi" | "kola" }>`
  display: grid;
  place-items: center;
  text-decoration: none;
  min-height: 50vh;
  transition: opacity 0.15s ease;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  color: #fff;
  font-weight: 900;
  font-size: clamp(22px, 3.5vw, 44px);
  letter-spacing: 0.5px;

  background:
    linear-gradient(rgba(46, 57, 255, 0.4), rgba(46, 57, 255, 0.4)),
    url(${({ $type }) =>
      $type === "krawedzi"
        ? "/images/krawedzi-bg-1.jpg"
        : "/images/kola-bg-1.jpg"});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    transition: opacity 0.15s ease;
    opacity: 0.8;
  }

  &:hover img {
    opacity: 1;
  }
`;

const Logo = styled.img`
  height: clamp(42px, 7vw, 90px);
  width: auto;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.35));
`;

const Header = styled.header`
  height: 56px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export default HomeSplit;
