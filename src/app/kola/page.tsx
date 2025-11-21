"use client";

import styled from "styled-components";
import PreferenceLink from "../Core/PreferenceLink";

const Page = styled.main`
  padding: 24px;
`;

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Brand = styled.img`
  height: 36px;
  width: auto;
`;

const Kola: React.FC = () => {
  return (
    <Page>
      <Top>
        <Brand src="/images/logos/pracownia-kola.svg" alt="Pracownia Koła" />
        <nav>
          <PreferenceLink to="/krawedzi">Pracownia Krawędzi</PreferenceLink>
        </nav>
      </Top>

      {/* poniżej wstawisz treść jak na Twoim ekranie 4 */}
      <section style={{ marginTop: 24 }}>
        <h1>Serwis rowerowy</h1>
        <p>Lista usług, pakiety, cennik itp.</p>
      </section>
    </Page>
  );
};

export default Kola;
