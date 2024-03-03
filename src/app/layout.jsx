import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"]});

export const metadata = {
  title: "J'ai 25 ans et 3 ans d'experience !",
  description: "Viens faire la fete avec moi le 23 mars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kalam.className}>{children}</body>
    </html>
  );
}
