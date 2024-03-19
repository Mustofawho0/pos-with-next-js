"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "~/supports/context/useUserContext";
import { useState } from "react";
import TanstackProvider from "~/components/providers/tanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const [userData, setUserData] = useState(null);
  return (
    <html lang="en">
      {/* <userContext.Provider value={{ userData, setUserData }}> */}
        <body className={inter.className}>
          <TanstackProvider>
          <ToastContainer />
          {children}
          </TanstackProvider>
        </body>
      {/* </userContext.Provider> */}
    </html>
  );
}
