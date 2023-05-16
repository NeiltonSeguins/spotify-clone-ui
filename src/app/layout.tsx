import "./globals.css";

export const metadata = {
  title: "Spotify Clone UI",
  description: "Clone da aplicação Spotify criado com Next JS e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
