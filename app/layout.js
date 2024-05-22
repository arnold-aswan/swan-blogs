import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/lib/StoreProvider";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swan_Blogs",
  description: "Best blog app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <div className="container max-w-screen-2xl px-3 md:px-5 ">
              <Header />
              {children}
              <Footer />
            </div>
          </StoreProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
