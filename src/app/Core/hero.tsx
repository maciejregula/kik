import styled from "styled-components";

const Hero: React.FC<{ variant: "krawedzi" | "kola" }> = ({ variant }) => {
  return (
    <HeroSection $variant={variant} id="hero" aria-label="Hero section">
      <HeroContent>
        <HeroLogo
          src={
            variant === "krawedzi"
              ? "/images/logos/pracownia-krawedzi.svg"
              : "/images/logos/pracownia-kola.svg"
          }
          alt={variant === "krawedzi" ? "Pracownia Krawędzi" : "Pracownia koła"}
        />
        {variant === "krawedzi" ? (
          <Quote>
            Lepiej iść na narty i myśleć o Bogu, niż
            <br />
            iść do kościoła i myśleć o nartach.
          </Quote>
        ) : (
          <Quote>
            {" "}
            Lepiej jechać rowerem i dziękować Bogu za życie,
            <br />
            niż stać w korku i o Nim zapominać.
          </Quote>
        )}
      </HeroContent>
    </HeroSection>
  );
};

export const Page = styled.div`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
`;

const HeroSection = styled.section<{ $variant: "krawedzi" | "kola" }>`
  /* Zmniejszamy max wysokość z 718px na np. 600px, aby sekcja była niższa */

  height: min(calc(100vh - 80px), 718px);

  /* Ostateczny styl Hero z Figmy */
  background: ${({ $variant }) =>
    $variant === "krawedzi"
      ? `url("/images/krawedzi/krawedzi-bg.jpg") 25% / cover no-repeat,
    #3644f6`
      : `url("/images/kola/kola-bg.jpg") 25% / cover no-repeat,
    #6FF048`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const HeroLogo = styled.img`
  width: 334px;
  height: auto;
`;

export const Quote = styled.p`
  font-size: 18px;
  font-weight: 400;
  max-width: 600px;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export default Hero;
