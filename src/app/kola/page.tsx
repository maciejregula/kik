"use client";

import Menu from "@/app/Core/menu";
import Map from "@/app/Core/map";
import Footer from "@/app/Core/footer";
import Hero, { Page } from "@/app/Core/hero";

const Kola: React.FC = () => {
  return (
    <Page>
      <Menu variant={"kola"} />
      <Hero variant={"kola"} />

      <Map variant={"kola"} />
      <Footer variant={"kola"} />
    </Page>
  );
};

export default Kola;
