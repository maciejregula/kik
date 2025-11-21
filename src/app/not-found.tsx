// src/app/not-found.tsx
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        textAlign: "center",
      }}
    >
      <section style={{ maxWidth: 680 }}>
        <h1 style={{ margin: "0 0 12px" }}>404 — nie znaleziono strony</h1>
        <p style={{ margin: "0 0 24px", color: "#5b6072" }}>
          Ten adres nie istnieje lub został przeniesiony.
        </p>
        <p
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/">Strona główna</Link>
          <Link href="/krawedzi">Pracownia Krawędzi</Link>
          <Link href="/kola">Pracownia Koła</Link>
        </p>
      </section>
    </main>
  );
};

export default NotFound;
