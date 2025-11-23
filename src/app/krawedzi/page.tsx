"use client";

import styled from "styled-components";
import Map from "@/app/Core/map";
import Footer from "@/app/Core/footer";
import Menu from "@/app/Core/menu";
import Hero, { Page } from "@/app/Core/hero";

const Krawedzi: React.FC = () => {
  return (
    <Page>
      <Menu variant="krawedzi" />
      <Hero variant="krawedzi" />

      <ContentSection>
        {/* SERWIS NARCIARSKI I SNOWBOARDOWY */}
        <SectionTitle id="serwis">Serwis narciarski i snowboardy</SectionTitle>
        <IntroText>
          Dbamy o Twój sprzęt tak, jakby był nasz własny –{" "}
          <strong>każdy serwis wykonujemy</strong>
          <br />
          <strong>wyłącznie ręcznie</strong>, z najwyższą starannością i
          dbałością o detale.
        </IntroText>
        {/* SERWIS NARCIARSKI I SNOWBOARDOWY ENDS */}

        {/* CO OFERUJEMY */}
        <SubTitle>Co oferujemy?</SubTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/ostrzenie-krawedzi.jpg"
              alt="Ręczne ostrzenie krawędzi"
            />
            <ServiceContent>
              <h4>
                Ręczne ostrzenie
                <br />
                krawędzi
              </h4>
              <p>Precyzyjne i bezpieczne dla Twoich nart lub deski.</p>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/smarowanie.jpg"
              alt="Smarowanie na gorąco żelazkiem"
            />
            <ServiceContent>
              <h4>
                Smarowanie na
                <br />
                gorąco żelazkiem
              </h4>
              <p>Skuteczne i trwałe zabezpieczenie ślizgu.</p>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/szczotkowanie.jpg"
              alt="Szczotkowanie ślizgów"
            />
            <ServiceContent>
              <h4>
                Szczotkowanie
                <br />
                ślizgów
              </h4>
              <p>Dla maksymalnej wydajności i komfortu jazdy.</p>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
        {/* CO OFERUJEMY ENDS */}

        {/* CENY USŁUG */}
        <SubTitle style={{ marginTop: 80 }}>Ceny usług</SubTitle>
        <PricingGrid>
          <PricingCard $variant="light">
            <h3>Podstawowy serwis</h3>
            <PricingListSmall>
              <li>Ostrzenie ręczne</li>
              <li>Smarowanie na gorąco żelazkiem</li>
            </PricingListSmall>
            <Divider />
            <Price>100 zł</Price>
            <PricingFooter>
              Dotyczy jednej pary nart lub jednej deski snowboardowej
            </PricingFooter>
          </PricingCard>

          <PricingCard $variant="middle">
            {/* Opcjonalnie: można manipulować marginami lub paddingami, aby środkowa karta wydawała się większa/ważniejsza */}
            <h3>Cennik serwisu</h3>
            <PricingRow>
              <span>Serwis nart/snowboardu</span>
              <strong>100 zł</strong>
            </PricingRow>
            <PricingListSmall>
              <li>Planowanie ślizgu</li>
              <li>Ręczne ostrzenie</li>
              <li>Smarowanie</li>
              <li>Regulacja wiązań</li>
            </PricingListSmall>

            <PricingRowSmall>
              <span>Smarowanie</span>
              <strong>50 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Ostrzenie</span>
              <strong>50 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Uzupełnienie ubytków</span>
              <strong>20 - 50 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Planowanie ślizgu</span>
              <strong>40 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Regulacja wiązań</span>
              <strong>20 zł</strong>
            </PricingRowSmall>
          </PricingCard>

          <PricingCard $variant="dark">
            <h3>Usługi dodatkowe</h3>
            <PricingListSmall>
              <li>Naprawy</li>
              <li>Regeneracje</li>
              <li>Tunning</li>
            </PricingListSmall>
            <Divider />

            <PricingFooter>
              Wyceniamy indywidualnie, po obejrzeniu sprzętu.
            </PricingFooter>
          </PricingCard>
        </PricingGrid>
        {/* CENY USŁUG ENDS */}

        {/* WYPOŻYCZALNIA */}
        <SectionTitle id="wypozyczalnia">Wypożyczalnia</SectionTitle>
        <IntroText>
          <strong>Wybierz idealny sprzęt dla siebie i rodziny.</strong> W naszej
          wypożyczalni znajdziesz kompletne zestawynarciarskie starranie dobrane
          do Twoich potrzeb. Każdy znajdzie coś dla siebie!
        </IntroText>
        {/* WYPOŻYCZALNIA ENDS */}

        {/* DLA KOGO */}
        <SubTitle>Dla kogo?</SubTitle>
        <ServicesGrid
          $minItemWidth="240px"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/dzieci.jpg"
              alt="nauka jazdy na nartach - dzieci"
            />
            <ServiceContent>
              <h4 style={{ fontSize: "20px" }}>Dzieci</h4>
              <p>
                Lekkie, bezpieczne narty i wygodne buty w małych rozmiarach.
              </p>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/poczatkujacy.jpg"
              alt="nauka jazdy na nartach - początkujący"
            />
            <ServiceContent>
              <h4 style={{ fontSize: "20px" }}>Początkujący</h4>
              <p>
                Sprzęt łatwy w prowadzeniu, idealny do nauki i pierwszych
                zjazdów.
              </p>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/sredniozaawansowani.jpg"
              alt="nauka jazdy na nartach - średniozaawansowani"
            />
            <ServiceContent>
              <h4 style={{ fontSize: "20px" }}>Średniozaawansowani</h4>
              <p>Stabilny i precyzyjny sprzęt do doskonalenia techniki.</p>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage
              src="/images/krawedzi/zaawansowani.jpg"
              alt="nauka jazdy na nartach - zaawansowani"
            />
            <ServiceContent>
              <h4 style={{ fontSize: "20px" }}>Zaawansowani</h4>
              <p>
                Narty o wyższych osiągach, dla osób szukających dynamiki i
                kontroli. 
              </p>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
        {/* DLA KOGO ENDS */}

        {/* DOBÓR SPRZĘTU */}
        <SelectionSection>
          <SelectionTextContent>
            <SelectionLabel>Dobór sprzętu</SelectionLabel>
            <SelectionHeading>
              Nasz zespół pomoże Ci dobrać sprzęt uwzględniając takie parametry
              jak:
            </SelectionHeading>
            <SelectionList>
              <li>Wzrost i waga</li>
              <li>Umiejętności</li>
              <li>Styl jazdy</li>
              <li>Warunki na stoku</li>
            </SelectionList>
            <SelectionFooterText>
              Każdy komplet jest wcześniej sprawdzony i przygotowany w naszym
              serwisie – <strong>gotowy do jazdy!</strong>
            </SelectionFooterText>
          </SelectionTextContent>

          <SelectionImagesWrapper>
            <MainSelectionImage
              src="/images/krawedzi/doborsprzetu1.jpg"
              alt="Dobór sprzętu narciarskiego"
            />
            <SmallSelectionImage
              src="/images/krawedzi/doborsprzetu2.jpg"
              alt="Narty w serwisie"
            />
          </SelectionImagesWrapper>
        </SelectionSection>
        {/* DOBÓR SPRZĘTU ENDS */}

        {/* CENNIK WYPOŻYCZALNI */}
        <SubTitle>Cennik wypożyczalni</SubTitle>
        <PricingGrid>
          <PricingCard $variant="dark">
            <h3>Zestawy narciarskie</h3>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "32px",
                marginTop: "-16px",
                opacity: 0.9,
              }}
            >
              (narty + buty + kije)
            </span>

            <p style={{ fontSize: "18px", marginBottom: "16px" }}>Dzieci</p>
            <PricingRowSmall>
              <span>1 doba</span>
              <strong>50 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Weekend (pt-pon)</span>
              <strong>120 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall style={{ marginBottom: "36px" }}>
              <span>Tydzień (7 dni)</span>
              <strong>250 zł</strong>
            </PricingRowSmall>

            <Divider />

            <p
              style={{
                fontSize: "18px",
                marginBottom: "16px",
                marginTop: "12px",
              }}
            >
              Dorośli
            </p>
            <PricingRowSmall>
              <span>1 doba</span>
              <strong>60 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Weekend (pt-pon)</span>
              <strong>140 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Tydzień (7 dni)</span>
              <strong>300 zł</strong>
            </PricingRowSmall>
          </PricingCard>

          <PricingCard $variant="light">
            <h3>Kask narciarski</h3>
            <PricingRowSmall>
              <span>1 doba</span>
              <strong>10 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall>
              <span>Weekend (pt-pon)</span>
              <strong>20 zł</strong>
            </PricingRowSmall>
            <PricingRowSmall style={{ marginBottom: "36px" }}>
              <span>Tydzień (7 dni)</span>
              <strong>40 zł</strong>
            </PricingRowSmall>

            <Divider />
            <PricingFooter>
              Istnieje możliwość wypożyczenia pojedynczych elementów zestawu –
              ceny ustalamy indywidualnie.
            </PricingFooter>
          </PricingCard>
        </PricingGrid>
        {/* CENNIK WYPOŻYCZALNI ENDS */}
      </ContentSection>

      {/* O NAS */}
      <TeamContainer>
        <ContentSection style={{ backgroundColor: "transparent" }}>
          <SectionTitle id="o-nas">O NAS</SectionTitle>
          <IntroText style={{ marginBottom: "60px" }}>
            Za Pracownią Krawędzi i Pracownią Koła stoją ojciec i syn – Marek i
            Wojciech.
            <br />
            Działamy razem, łącząc <strong>doświadczenie</strong>,{" "}
            <strong>pasję</strong> i <strong>zamiłowanie do narciarstwa</strong>
            .
          </IntroText>

          <ProfilesGrid>
            <ProfileCard>
              <ProfileImage src="/images/wojtek.png" alt="Wojciech" />
              <ProfileName>Wojciech</ProfileName>
              <ProfileBio>
                Instruktor narciarstwa i snowboardu, psycholog sportu i
                serwisant w jednym. Uczy jeździć bez stresu i z uśmiechem, a
                narty i deski traktuje lepiej niż niektórzy własne auto –
                ostrzy, smaruje, naprawia, dopieszcza.
              </ProfileBio>
            </ProfileCard>

            <ProfileCard>
              <ProfileImage src="/images/marek.png" alt="Marek" />
              <ProfileName>Marek</ProfileName>
              <ProfileBio>
                Pasjonat narciarstwa i majsterkowicz. Serwisant, który sprawia,
                że sprzęt działa lepiej niż nowy, ostrzy narty z
                zegarmistrzowską precyzją i, jak sam mówi, czasem „za bardzo się
                doktoryzuje”.
              </ProfileBio>
            </ProfileCard>
          </ProfilesGrid>

          <AboutBottomSection style={{ marginBottom: 0, maxWidth: "1280px" }}>
            <AboutTextContent>
              <p>
                <em>
                  Tworzymy to miejsce z myślą o ludziach, którzy doceniają
                  jakość, ręczną robotę i uczciwe podejście.
                </em>
              </p>
              <p>
                <em>
                  To nie tylko serwis i wypożyczalnia – to lokalna, rodzinna
                  pracownia, gdzie Twoim sprzętem zajmą się ludzie, którzy to
                  lubią i naprawdę się na tym znają.
                </em>
              </p>
              <Signature>
                Zapraszamy!
                <br />
                <strong>Wojciech i Marek</strong>
              </Signature>
            </AboutTextContent>
            <AboutImageWrapper>
              <AboutTeamImage
                src="/images/serwis-ludzie.jpg"
                alt="Wojciech i Marek w serwisie"
              />
            </AboutImageWrapper>
          </AboutBottomSection>
        </ContentSection>
      </TeamContainer>
      {/* O NAS ENDS */}

      {/* MAP */}
      <Map variant={"krawedzi"} />
      {/* MAP ENDS */}

      {/* FOOTER */}
      <Footer variant={"krawedzi"} />
      {/* FOOTER ENDS */}
    </Page>
  );
};

const ContentSection = styled.section`
  padding: 0 24px;
  max-width: 1280px; /* Zwiększono z 1200px, aby karty miały więcej miejsca */
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center; /* Centruje wszystko w poziomie */
  text-align: center; /* Centruje tekst wewnątrz elementów */
  background-color: #fff;
  color: #10101a;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 93px;
  margin-bottom: 25px;
  letter-spacing: 1px;
  color: #000;

  /* To naprawia problem zasłaniania przez nagłówek */
  scroll-margin-top: 80px;
`;

const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 700px; /* Ograniczenie szerokości dla lepszej czytelności */
  margin: 0 0 64px 0;
  color: #000;

  strong {
    font-weight: 700;
  }
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1d2d74;
  margin: 0 0 72px 0;
  padding: 10px 0;
`;

const ServicesGrid = styled.div<{ $minItemWidth?: string }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $minItemWidth }) => $minItemWidth || "300px"}, 1fr)
  );

  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 24px;
  padding: 0 60px;
  box-sizing: border-box;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 179px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 24px 0;
  text-align: center;

  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0 24px;
    color: #000;
    line-height: 1.4;
  }

  p {
    font-size: 18px;
    color: #000;
    line-height: 1.5;
    padding: 0 45px;
    margin: 0 0 36px 0;
  }
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-wrap: nowrap; /* Wymuszamy jeden rząd na desktopach */
  }
`;

const PricingCard = styled.div<{ $variant: "light" | "middle" | "dark" }>`
  color: white;
  padding: 32px;
  border-radius: 16px;
  text-align: left;
  width: 100%;
  max-width: 380px;
  flex: 1 1 300px;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* Definicje tła dla poszczególnych wariantów */
  background: ${({ $variant }) => {
    switch ($variant) {
      case "light":
        return "linear-gradient(135deg, #4F84F7 0%, #2B62D9 100%)"; // Jasny błękit
      case "middle":
        return "linear-gradient(135deg, #202496 0%, #0F1154 100%)"; // Ciemny granat (fioletowawy)
      case "dark":
        return "linear-gradient(135deg, #12165E 0%, #080A33 100%)"; // Bardzo ciemny granat
      default:
        return "#1d2d74";
    }
  }};

  /* Opcjonalnie: dodanie subtelnego "blasku" lub wzoru */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 60%
    );
    pointer-events: none;
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
    margin-top: 8px;
    position: relative;
  }

  //ul {
  //  list-style: none;
  //  padding: 0;
  //  margin: 0 0 24px;
  //  font-weight: 400;
  //
  //  li {
  //    margin-bottom: 12px;
  //    font-size: 16px;
  //    position: relative;
  //    padding-left: 16px;
  //
  //    &:before {
  //      content: "•";
  //      position: absolute;
  //      left: 0;
  //      font-weight: bold;
  //    }
  //  }
  //}
`;

const Divider = styled.div`
  height: 1px;
  background: #73b7ff;
  width: 100%; /* Zmieniono na pełną szerokość */
  margin-bottom: 24px;
`;

const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const PricingNote = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.4;
`;

const PricingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  font-size: 18px;

  strong {
    font-weight: 700;
  }
`;

const PricingRowSmall = styled(PricingRow)`
  margin-bottom: 6px;
  font-weight: 400;
  font-style: normal;
`;

const PricingListSmall = styled.ul`
  && {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    font-weight: 400;

    li {
      margin-bottom: 12px;
      font-size: 16px;
      position: relative;
      padding-left: 16px;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;

const PricingFooter = styled.p`
  margin-top: auto;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%; /* 22.14px */
  padding-top: 12px;
`;

const SelectionSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 40px;
  margin: 100px 0;
  width: 100%;
  text-align: left;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }
`;

const SelectionTextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const SelectionLabel = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #404040;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

const SelectionHeading = styled.h2`
  font-size: 32px; /* Dostosowane do projektu */
  font-weight: 800;
  color: #1d2d74;
  text-transform: uppercase;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 32px;
`;

const SelectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  color: #000;

  li {
    font-size: 18px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    font-weight: 500;

    &:before {
      content: "•";
      margin-right: 16px;
      font-size: 24px;
      line-height: 1;
    }
  }
`;

const SelectionFooterText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #000;

  strong {
    font-weight: 700;
  }
`;

const SelectionImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  /* Rezerwujemy miejsce na wystający obrazek na dole */
  padding-bottom: 40px;
  padding-right: 20px;
`;

const MainSelectionImage = styled.img`
  width: 85%;
  height: auto;
  border-radius: 16px;
  display: block;
`;

const SmallSelectionImage = styled.img`
  position: absolute;
  bottom: -50px;
  right: 0;
  width: 65%;
  height: auto;
  border-radius: 16px;
`;

const TeamContainer = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
  background: #f9f8f8;
  width: 100%; /* Naturalna szerokość */
  display: flex;
  box-sizing: border-box;
  justify-content: center; /* Centrowanie wewnętrznego kontenera */
`;

const ProfilesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 100px;
  width: 100%;
  max-width: 1000px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  flex: 1;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
`;

const ProfileBio = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #404040;
`;

const AboutBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }
`;

const AboutTextContent = styled.div`
  flex: 1;
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 20px;

  /* Stylizacja kursywy */
  em {
    font-style: italic;
  }
`;

const Signature = styled.div`
  margin-top: 16px;
  font-size: 20px;
  color: #1d2d74;
  font-weight: 700;
  line-height: 1.4;
`;

const AboutImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutTeamImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

export default Krawedzi;
