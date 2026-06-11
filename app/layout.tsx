import "./globals.css";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const language = requestHeaders.get("x-portfolio-language") === "en" ? "en-US" : "pt-BR";

  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  );
}
