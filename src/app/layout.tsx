/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container/Container";
import { kumbh } from "../_lib/fonts";
import Header from "@/components/Header/Header";
import CartItem from "@/components/Header/CartItem";

export const metadata: Metadata = {
  title: "Sneakers single page",
  description: "Frontend mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ kumbh.className } antialiased`}
      >
        <CartItem>
          <Header />
          <Container>
            {children}
          </Container>
        </CartItem>
      </body>
    </html>
  );
}
