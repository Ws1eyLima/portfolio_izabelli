import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Izabelli | Analista de BI e Financeiro",
  description:
    "Portfólio de Izabelli, analista de BI e financeiro focada em dashboards, indicadores e análises para tomada de decisão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
