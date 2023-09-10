import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MBRAS LP",
  description: "Dados em nova base",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={mont.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
