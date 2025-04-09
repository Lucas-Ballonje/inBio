import "./globals.css";
import { Red_Hat_Display } from "next/font/google"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${redHatDisplay.className} text-content-body bg-background-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
