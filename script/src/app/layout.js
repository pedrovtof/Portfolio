"use client";
import React from "react";
import ThemeProvider from "./module/materialDesing/theme/theme";
import "./global/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
