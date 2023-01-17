import React from "react";
import "styles/global.css";
import Navbar from "components/Navbar";
import { AuthProvider } from "util/auth";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <>
          <Navbar />

          <Component {...pageProps} />
        </>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
