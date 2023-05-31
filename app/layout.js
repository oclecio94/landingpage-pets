import Header from "@/components/Header";
import "./globals.css";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CuidaPets",
  description: "Cuidando do seu Pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Work />
        <Footer />
      </body>
    </html>
  );
}
