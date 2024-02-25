import React from "react";
import "../styles/main.css";
import Navbar from "../components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}