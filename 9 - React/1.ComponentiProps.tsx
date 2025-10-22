/*
COMPONENTI E PROPS CON TYPESCRIPT
Quando usi TypeScript in React, devi definire i tipi delle props
per ogni componente. Questo ti dà autocomplete nell'IDE e previene errori.

VANTAGGI:
- L'IDE ti suggerisce quali props servono
- Errori se passi props sbagliate o mancanti
- Codice più leggibile e documentato
*/

import React from "react";

// COMPONENTE BASE CON PROPS
// Definisci sempre un'interfaccia per le props
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// PROPS OPZIONALI
// Usa ? per rendere una prop opzionale
interface CardProps {
  title: string;
  subtitle?: string; // opzionale
  children: React.ReactNode; // per contenuto JSX
}

const Card: React.FC<CardProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      {children}
    </div>
  );
};

// PROPS CON VALORI LIMITATI
// Usa union types per limitare i valori possibili
interface BadgeProps {
  text: string;
  variant: "success" | "error" | "warning"; // solo questi valori!
}

const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return <span className={`badge-${variant}`}>{text}</span>;
};

// Uso dei componenti
const App = () => {
  return (
    <div>
      <Card title="Titolo" subtitle="Sottotitolo">
        <p>Contenuto</p>
        <Button text="Clicca" onClick={() => console.log("Click!")} />
      </Card>

      <Badge text="Successo" variant="success" />
      {/* <Badge text="Test" variant="info" /> */}
      {/* ❌ Errore: "info" non è permesso! */}
    </div>
  );
};

/*
NOTE IMPORTANTI
- Usa interface per definire le props
- React.FC<NomeProps> tipizza il componente funzionale
- ? dopo il nome rende la prop opzionale
- React.ReactNode è il tipo per children (contenuto JSX)
- Union types (|) per limitare i valori (es: 'success' | 'error')
- L'IDE ti avvisa se dimentichi una prop obbligatoria
- TypeScript controlla i tipi alla compilazione
*/

export { Button, Card, Badge };
